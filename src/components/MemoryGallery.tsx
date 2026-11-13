import Image from "next/image";
import type { MediaItem } from "@/types";

function PhotoSketch() {
  return (
    <svg viewBox="0 0 72 72" className="sketch-icon" aria-hidden="true">
      <rect
        x="11"
        y="17"
        width="50"
        height="38"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
      <circle cx="27" cy="30" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M17 48l13-13 8 8 7-7 10 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 10c.7 2.9 2 4.2 4.9 4.9-2.9.7-4.2 2-4.9 4.9-.7-2.9-2-4.2-4.9-4.9 2.9-.7 4.2-2 4.9-4.9Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

function DocumentSketch() {
  return (
    <svg viewBox="0 0 72 72" className="sketch-icon" aria-hidden="true">
      <path
        d="M20 9h23l10 10v44H20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M43 9v10h10" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <g stroke="currentColor" strokeWidth="1" opacity="0.7">
        <path d="M27 27h20M27 34h16M27 41h20M27 48h11" />
      </g>
      <rect x="38" y="45" width="11" height="4" fill="currentColor" opacity="0.28" />
      <path
        d="M58 45c.7 2.9 2 4.2 4.9 4.9-2.9.7-4.2 2-4.9 4.9-.7-2.9-2-4.2-4.9-4.9 2.9-.7 4.2-2 4.9-4.9Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export function MemoryGallery({ items }: { items: MediaItem[] }) {
  return (
    <div className="gallery">
      {items.map((item, index) => {
        const hasImage = Boolean(item.src);
        const format = item.format ?? "photo";

        return (
          <figure
            key={index}
            className={`memory memory--${item.span ?? "wide"} memory--${format}`}
          >
            <div className="memory__mount">
              <div
                className="memory__frame"
                style={{ aspectRatio: item.aspect ?? "4 / 3" }}
              >
                {hasImage && item.src ? (
                  <Image
                    className="memory__image"
                    src={item.src}
                    alt={item.alt ?? ""}
                    fill
                    sizes="(max-width: 720px) 92vw, (max-width: 1100px) 70vw, 760px"
                    style={item.focus ? { objectPosition: item.focus } : undefined}
                  />
                ) : (
                  <div className="memory__placeholder">
                    {format === "document" ? <DocumentSketch /> : <PhotoSketch />}
                    <p className="memory__placeholder-label">
                      {format === "document" ? "Screenshot" : "Photograph"}
                    </p>
                    <p className="memory__placeholder-text">
                      {item.placeholder ?? "A memory will live here"}
                    </p>
                    <p className="memory__placeholder-path">
                      {"public/images/"}
                      {item.suggestedFile?.replace(/\//g, "/\u200B")}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {item.caption && (
              <figcaption className="memory__caption">{item.caption}</figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
