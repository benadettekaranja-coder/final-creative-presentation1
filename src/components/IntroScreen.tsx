import { introCopy } from "@/data/copy";
import { Ornament, Sprig } from "./Botanicals";
import { Cauldron } from "./Cauldron";

export function IntroScreen({
  onEnter,
  leaving,
}: {
  onEnter: () => void;
  leaving: boolean;
}) {
  return (
    <section
      className={`intro${leaving ? " is-leaving" : ""}`}
      aria-labelledby="intro-title"
    >
      <div className="intro__copy">
        <p className="eyebrow">{introCopy.eyebrow}</p>
        <h1 id="intro-title" className="intro__title">
          <span>{introCopy.titleLead}</span>
          <span className="intro__title-accent">{introCopy.titleTail}</span>
        </h1>
        <Ornament className="intro__ornament" />
        <div className="intro__body">
          {introCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="intro__question">{introCopy.question}</p>
        </div>
        <button
          id="enter-garden"
          className="button button--primary intro__enter"
          type="button"
          onClick={onEnter}
          disabled={leaving}
        >
          <span>{introCopy.button}</span>
          <svg
            className="button__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M4 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="intro__footnote">{introCopy.footnote}</p>
      </div>

      <div className="intro__illustration" aria-hidden="true">
        <div className="intro__halo" />
        <div className="intro__cauldron">
          <Cauldron variant="intro" />
        </div>
        <Sprig variant="bloom" className="intro__sprig intro__sprig--left" />
        <Sprig variant="fern" className="intro__sprig intro__sprig--right" />
        <div className="intro__moss" />
      </div>

      <p className="intro__footer">{introCopy.footer}</p>
    </section>
  );
}
