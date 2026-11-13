"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Ingredient } from "@/types";
import { scrollCopy } from "@/data/copy";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { IngredientObject } from "./IngredientObject";
import { MemoryGallery } from "./MemoryGallery";
import { Ornament, Sprig } from "./Botanicals";

export function ScrollOverlay({
  ingredient,
  discovered,
  total,
  onClose,
}: {
  ingredient: Ingredient;
  discovered: number;
  total: number;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [closing, setClosing] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    closeTimer.current = setTimeout(
      () => onClose(),
      reducedMotion ? 60 : 380,
    );
  }, [onClose, reducedMotion]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
        return;
      }

      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [requestClose]);

  return (
    <div className={`scroll-overlay${closing ? " is-closing" : ""}`}>
      <div className="scroll-overlay__backdrop" aria-hidden="true" />

      <div className="scroll-frame">
        <div className="scroll-rod scroll-rod--top" aria-hidden="true">
          <span className="scroll-rod__knob scroll-rod__knob--left" />
          <span className="scroll-rod__knob scroll-rod__knob--right" />
        </div>

        <div
          className={`scroll-panel scroll-panel--${ingredient.tone}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="scroll-title"
          aria-describedby="scroll-intro"
          ref={panelRef}
        >
          <div className="scroll-corner scroll-corner--left" aria-hidden="true">
            <Sprig variant="fern" />
          </div>
          <div className="scroll-corner scroll-corner--right" aria-hidden="true">
            <Sprig variant="bloom" />
          </div>

          <button
            type="button"
            className="scroll-close"
            onClick={requestClose}
            disabled={closing}
            ref={closeButtonRef}
            aria-label={scrollCopy.closeLabel}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="scroll-body">
            <header className="scroll-header">
              <div className="scroll-emblem">
                <IngredientObject id={ingredient.id} />
              </div>
              <p className="scroll-kicker">
                Ingredient {ingredient.numeral} · {ingredient.objectName}
              </p>
              <h2 className="scroll-title" id="scroll-title">
                {ingredient.theme}
              </h2>
              <p className="scroll-intro" id="scroll-intro">
                {ingredient.intro}
              </p>
              <Ornament className="scroll-ornament" />
            </header>

            <div
              className={`scroll-story${ingredient.notes ? " scroll-story--with-notes" : ""}`}
            >
              <section className="scroll-reflection" aria-label={scrollCopy.reflectionLabel}>
                {ingredient.notes && (
                  <h3 className="section-label">{scrollCopy.reflectionLabel}</h3>
                )}
                <div className="scroll-reflection__body">
                  {ingredient.reflection.map((paragraph, index) => (
                    <p
                      key={index}
                      className={index === 0 ? "drop-cap" : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {ingredient.notes && (
                <aside className="notebook" aria-label={scrollCopy.notebookTitle}>
                  <span className="notebook__tape" aria-hidden="true" />
                  <h3 className="notebook__title">{scrollCopy.notebookTitle}</h3>
                  <ul className="notebook__list">
                    {ingredient.notes.map((note) => (
                      <li key={note.label}>
                        <span className="notebook__label">{note.label}</span>
                        <span className="notebook__text">{note.text}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>

            {ingredient.media.length > 0 && (
              <section className="scroll-gallery" aria-label={ingredient.mediaLabel}>
                <div className="scroll-gallery__heading">
                  <h3 className="section-label">{ingredient.mediaLabel}</h3>
                  <span className="scroll-gallery__rule" aria-hidden="true" />
                </div>
                <MemoryGallery items={ingredient.media} />
              </section>
            )}

            {ingredient.closing && (
              <p className="scroll-closing">{ingredient.closing}</p>
            )}

            <footer className="scroll-footer">
              <button
                type="button"
                className="button button--quiet"
                onClick={requestClose}
                disabled={closing}
              >
                <svg
                  className="button__icon button__icon--back"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M20 12H6M11 6l-6 6 6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{scrollCopy.back}</span>
              </button>
              <p className="scroll-progress">
                {discovered} / {total} {scrollCopy.footerNote}
              </p>
            </footer>
          </div>
        </div>

        <div className="scroll-rod scroll-rod--bottom" aria-hidden="true">
          <span className="scroll-rod__knob scroll-rod__knob--left" />
          <span className="scroll-rod__knob scroll-rod__knob--right" />
        </div>
      </div>
    </div>
  );
}
