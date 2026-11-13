"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import type { IngredientId, PullPhase } from "@/types";
import { cauldronCopy } from "@/data/copy";
import { Cauldron } from "./Cauldron";
import { IngredientObject } from "./IngredientObject";
import { Sprig } from "./Botanicals";

const SPARKS = Array.from({ length: 22 }, (_, index) => {
  const angle = (index / 22) * Math.PI * 2;
  return {
    left: 50 + Math.sin(angle) * 15,
    dx: Math.sin(angle) * (58 + (index % 6) * 16),
    dy: -54 - Math.abs(Math.cos(angle)) * (50 + (index % 4) * 16),
    delay: (index % 8) * 42,
    duration: 900 + (index % 5) * 130,
    size: 3 + (index % 3) * 2,
    tone: index % 4,
  };
});

function SparkleMark() {
  return (
    <svg
      className="button__icon button__icon--sparkle"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DiscoveryMark({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`discovery__star${filled ? " is-filled" : ""}`}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 1.5c.9 4.9 3.1 7.1 8 8-4.9.9-7.1 3.1-8 8-.9-4.9-3.1-7.1-8-8 4.9-.9 7.1-3.1 8-8Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function CauldronScene({
  discovered,
  total,
  phase,
  emerging,
  onPull,
}: {
  discovered: number;
  total: number;
  phase: PullPhase;
  emerging: IngredientId | null;
  onPull: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const busy = phase === "brewing" || phase === "emerging";
  const buttonDisabled = phase !== "idle";

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <section className="scene" aria-labelledby="scene-title">
      <header className="scene__head">
        <p className="eyebrow">{cauldronCopy.eyebrow}</p>
        <h1
          id="scene-title"
          className="scene__title"
          tabIndex={-1}
          ref={headingRef}
        >
          {cauldronCopy.title}
        </h1>
        <p className="scene__subtitle">{cauldronCopy.body}</p>
      </header>

      <div className="scene__stage">
        <div
          className={`cauldron-wrap${busy ? " is-stirring" : ""}${
            phase === "emerging" ? " is-emerging" : ""
          }`}
        >
          <div className="cauldron-wrap__ground" aria-hidden="true" />
          <Cauldron active={busy} />
          <div className="stage-sprig stage-sprig--left" aria-hidden="true">
            <Sprig variant="fern" />
          </div>
          <div className="stage-sprig stage-sprig--right" aria-hidden="true">
            <Sprig variant="bloom" />
          </div>

          {busy &&
            SPARKS.map((spark, index) => (
              <span
                key={index}
                className={`spark spark--tone-${spark.tone}`}
                style={
                  {
                    "--spark-left": `${spark.left}%`,
                    "--spark-dx": `${spark.dx}px`,
                    "--spark-dy": `${spark.dy}px`,
                    "--spark-delay": `${spark.delay}ms`,
                    "--spark-duration": `${spark.duration}ms`,
                    "--spark-size": `${spark.size}px`,
                  } as CSSProperties
                }
                aria-hidden="true"
              />
            ))}

          {phase === "emerging" && emerging && (
            <div className="ingredient-rise" aria-hidden="true">
              <div className="ingredient-rise__beam" />
              <IngredientObject id={emerging} />
            </div>
          )}

          <p className={`cauldron-wrap__whisper${busy ? " is-visible" : ""}`}>
            {phase === "emerging" ? "Something surfaces…" : "Stirring…"}
          </p>
        </div>
      </div>

      <footer className="scene__foot">
        <div className="discovery">
          <div className="discovery__stars" aria-hidden="true">
            {Array.from({ length: total }, (_, index) => (
              <DiscoveryMark key={index} filled={index < discovered} />
            ))}
          </div>
          <p className="discovery__text">
            <span className="discovery__count">
              {discovered} / {total}
            </span>{" "}
            {cauldronCopy.counterLabel}
          </p>
        </div>

        <div className="scene__action">
          <button
            id="pull-ingredient"
            className="button button--primary button--pull"
            type="button"
            onClick={onPull}
            disabled={buttonDisabled}
            aria-busy={busy}
          >
            {busy ? (
              <>
                <span>{cauldronCopy.stirring}</span>
                <span className="stirring-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </>
            ) : (
              <>
                <SparkleMark />
                <span>{cauldronCopy.button}</span>
              </>
            )}
          </button>
          <p className="scene__hint">{cauldronCopy.hint}</p>
        </div>
      </footer>
    </section>
  );
}
