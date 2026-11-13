"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { finalCopy } from "@/data/copy";
import { finalPortrait } from "@/data/ingredients";
import { Cauldron } from "./Cauldron";
import { Ornament } from "./Botanicals";

function PortraitPlaceholder() {
  return (
    <div className="portrait-placeholder">
      <svg viewBox="0 0 120 150" className="portrait-placeholder__sketch" aria-hidden="true">
        <path
          d="M60 30c-16 0-27 11-27 27 0 10 4 18 11 23l-3 15C28 100 19 112 18 132h84c-1-20-10-32-23-37l-3-15c7-5 11-13 11-23 0-16-11-27-27-27Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <path
          d="M60 34c-12 0-21 9-21 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M94 24c4 2 7 6 8 11M24 116c-5 3-8 8-9 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      <p className="portrait-placeholder__title">A portrait will live here</p>
      <p className="portrait-placeholder__path">
        {"public/images/"}
        {finalPortrait.suggestedFile.replace(/\//g, "/\u200B")}
      </p>
    </div>
  );
}

export function FinalReveal({ onRestart }: { onRestart: () => void }) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, []);

  const hasPortrait = Boolean(finalPortrait.src && finalPortrait.alt);

  return (
    <section className="final" aria-labelledby="final-title">
      <header className="final__head">
        <p className="eyebrow">{finalCopy.eyebrow}</p>
        <h1 id="final-title" className="final__title" tabIndex={-1} ref={titleRef}>
          <span>{finalCopy.titleLead}</span>{" "}
          <em>{finalCopy.titleTail}</em>
        </h1>
        <Ornament className="final__ornament" />
      </header>

      <div className="final__composition">
        <figure className="final__portrait">
          <div className="portrait-frame">
            <div
              className="portrait-frame__inner"
              style={{ aspectRatio: finalPortrait.aspect }}
            >
              {hasPortrait && finalPortrait.src && finalPortrait.alt ? (
                <Image
                  src={finalPortrait.src}
                  alt={finalPortrait.alt}
                  fill
                  sizes="(max-width: 720px) 70vw, 300px"
                  className="portrait-frame__image"
                />
              ) : (
                <PortraitPlaceholder />
              )}
            </div>
          </div>
          <figcaption className="final__caption">
            {finalCopy.portraitCaption}
          </figcaption>
        </figure>

        <div className="final__words">
          {finalCopy.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === finalCopy.paragraphs.length - 1 ? "final__last" : undefined}
            >
              {paragraph}
            </p>
          ))}

          <button type="button" className="restart" onClick={onRestart}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M19 12a7 7 0 1 1-2-5M19 4v5h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{finalCopy.restart}</span>
          </button>
        </div>

        <div className="final__cauldron" aria-hidden="true">
          <Cauldron variant="final" />
          <p className="final__cauldron-caption">{finalCopy.cauldronCaption}</p>
        </div>
      </div>
    </section>
  );
}
