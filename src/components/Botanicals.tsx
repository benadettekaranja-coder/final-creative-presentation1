import type { CSSProperties } from "react";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`ornament ${className}`.trim()}
      viewBox="0 0 240 26"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 13h84"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M152 13h84"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M108 6c4 2 8 4 12 7-4 3-8 5-12 7-4-2-8-4-12-7 4-3 8-5 12-7Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M104 13h8M92 13c4-5 9-7 14-7M148 13c-4-5-9-7-14-7M92 13c4 5 9 7 14 7M148 13c-4 5-9 7-14 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function Sprig({
  variant = "bloom",
  className = "",
}: {
  variant?: "bloom" | "fern";
  className?: string;
}) {
  if (variant === "fern") {
    return (
      <svg
        className={`sprig sprig--fern ${className}`.trim()}
        viewBox="0 0 180 300"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M96 288C100 238 88 196 98 150c7-33 2-73 14-112"
          fill="none"
          stroke="#526B52"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {Array.from({ length: 11 }, (_, i) => {
          const y = 262 - i * 21;
          const x = 96 + Math.sin(i * 1.2) * 7;
          const spread = 34 + i * 2.2;
          return (
            <g key={i} opacity={0.9 - i * 0.035}>
              <path
                d={`M${x} ${y}c-${spread * 0.5} -2 -${spread} -10 -${spread} -20 12 2 21 10 ${spread} 20Z`}
                fill="#89977A"
                stroke="#526B52"
                strokeWidth="0.8"
              />
              <path
                d={`M${x} ${y - 4}c${spread * 0.5} -2 ${spread} -10 ${spread} -20 -12 2 -21 10 -${spread} 20Z`}
                fill="#89977A"
                stroke="#526B52"
                strokeWidth="0.8"
                opacity="0.82"
              />
            </g>
          );
        })}
        <g opacity="0.9">
          <path
            d="M122 274c0-13 6-22 15-26 5 10 1 22-8 28"
            fill="#A99BBE"
            stroke="#6f6386"
            strokeWidth="1.2"
          />
          <path
            d="M129 276c-6 1-10 5-12 11M131 276c6 1 10 4 12 10"
            fill="none"
            stroke="#526B52"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path d="M132 248v-7" stroke="#526B52" strokeWidth="1.2" />
        </g>
        <g stroke="#526B52" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.65">
          <path d="M72 296c-3-14 1-25 10-34M62 296c-1-9 1-16 6-23M112 297c4-11 3-21-2-30" />
          <path d="M54 296c2-16 9-27 20-34" />
        </g>
        <circle cx="70" cy="120" r="2.4" fill="#C6A66A" opacity="0.8" />
        <circle cx="118" cy="84" r="1.8" fill="#C6A66A" opacity="0.7" />
      </svg>
    );
  }

  return (
    <svg
      className={`sprig sprig--bloom ${className}`.trim()}
      viewBox="0 0 180 300"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M92 294c-12-48 18-72 4-114-10-31 2-58 18-92"
        fill="none"
        stroke="#526B52"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M97 248c-26-6-42-24-44-48 24 3 42 20 44 48Z"
        fill="#89977A"
        stroke="#526B52"
        strokeWidth="1"
      />
      <path
        d="M100 214c25-9 38-27 38-50-23 5-39 24-38 50Z"
        fill="#89977A"
        stroke="#526B52"
        strokeWidth="1"
        opacity="0.85"
      />
      <path
        d="M102 172c-23-8-37-26-38-48 22 5 37 23 38 48Z"
        fill="#6f8066"
        stroke="#526B52"
        strokeWidth="1"
        opacity="0.9"
      />
      <path
        d="M107 136c21-10 32-27 30-48-20 7-31 25-30 48Z"
        fill="#89977A"
        stroke="#526B52"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M113 104c-16-9-24-24-22-42 16 7 23 23 22 42Z"
        fill="#6f8066"
        stroke="#526B52"
        strokeWidth="1"
      />
      <path
        d="M119 84c1-20 10-34 27-43 1 18-9 33-27 43Z"
        fill="#89977A"
        stroke="#526B52"
        strokeWidth="1"
        opacity="0.85"
      />
      <g>
        <path
          d="M112 58c-2-10 2-18 10-23 5 8 2 17-4 23"
          fill="none"
          stroke="#526B52"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <g transform="translate(117 34)">
          {Array.from({ length: 5 }, (_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-7"
              rx="3.4"
              ry="6.6"
              fill="#B4A7C6"
              stroke="#6f6386"
              strokeWidth="0.7"
              transform={`rotate(${i * 72})`}
              opacity="0.95"
            />
          ))}
          <circle cx="0" cy="0" r="2.7" fill="#C6A66A" />
        </g>
        <circle cx="132" cy="62" r="2.5" fill="#C6A66A" opacity="0.9" />
        <circle cx="137" cy="50" r="1.8" fill="#C6A66A" opacity="0.75" />
        <circle cx="126" cy="46" r="1.4" fill="#A99BBE" opacity="0.8" />
      </g>
      <path
        d="M90 282c-12 1-20 7-25 17M94 283c11 0 19 5 24 14"
        fill="none"
        stroke="#526B52"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function GardenFloor({ className = "" }: { className?: string }) {
  const blades =
    "M0 220C34 220 42 178 46 144c6 34 16 58 38 76M84 220c6-38 22-64 48-84-14 32-17 60-10 84M196 220c-2-50 16-84 42-108-10 38-8 76 6 108M302 220c14-42 30-64 54-74-14 24-19 48-14 74M404 220c-6-36 2-66 26-92-8 32-6 62 6 92M488 220c18-30 40-46 68-48-20 16-32 34-36 48M586 220c-4-44 8-78 36-102-12 36-12 70 0 102M674 220c8-30 24-48 48-56-14 18-22 36-24 56M756 220c0-40 14-70 42-90-12 32-14 62-6 90M858 220c-8-34 2-62 26-84-8 28-6 58 4 84M940 220c16-34 36-52 62-58-18 18-28 38-30 58M1042 220c-2-46 12-80 40-104-14 38-14 74-2 104M1132 220c8-34 26-54 52-62-16 20-24 42-24 62M1224 220c-4-40 8-72 34-94-12 34-12 66-2 94M1322 220c14-32 32-50 56-56-16 18-26 38-28 56M1414 220c-2-44 10-76 38-98-12 36-12 70-2 98M1504 220c10-30 28-48 52-54-16 18-24 36-26 54";
  return (
    <svg
      className={`garden-floor ${className}`.trim()}
      viewBox="0 0 1600 220"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`${blades}L1600 220H0Z`}
        fill="currentColor"
        opacity="0.5"
      />
      <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55">
        <path d="M150 220c2-30 12-50 30-62M160 220c-2-24 2-44 14-60M336 220c8-22 20-38 38-44" />
        <path d="M532 220c-3-26 4-48 22-66M554 220c5-22 14-38 28-48M1260 220c4-36 16-62 38-78" />
      </g>
      <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5">
        <path d="M244 220c-2-14 1-24 8-32M258 220c2-11 6-19 12-25M976 220c-3-16 1-28 10-38M994 220c4-12 9-21 16-27" />
      </g>
      <g opacity="0.65">
        <path
          d="M112 220c0-14 7-23 17-27 5 10 0 22-9 27"
          fill="currentColor"
        />
        <path d="M120 221v-8" stroke="currentColor" strokeWidth="1" />
        <path
          d="M714 220c0-11 6-19 14-22 4 8 0 18-7 22"
          fill="currentColor"
        />
        <path
          d="M1388 220c0-13 7-22 16-25 4 9 0 20-9 25"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

const STAR_POINTS = [
  { left: "6%", top: "16%", size: 11, delay: "-1.5s" },
  { left: "17%", top: "9%", size: 7, delay: "-4s" },
  { left: "31%", top: "20%", size: 9, delay: "-2.2s" },
  { left: "46%", top: "8%", size: 6, delay: "-5.4s" },
  { left: "64%", top: "15%", size: 10, delay: "-3.1s" },
  { left: "78%", top: "7%", size: 7, delay: "-6.2s" },
  { left: "89%", top: "19%", size: 12, delay: "-2.8s" },
  { left: "95%", top: "34%", size: 6, delay: "-4.6s" },
  { left: "3%", top: "38%", size: 7, delay: "-0.8s" },
];

export function Stars() {
  return (
    <div className="sky-stars" aria-hidden="true">
      {STAR_POINTS.map((star, index) => (
        <svg
          key={index}
          className="sky-star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            animationDelay: star.delay,
          }}
          viewBox="0 0 20 20"
        >
          <path
            d="M10 1c.8 4.8 3.2 7.2 8 8-4.8.8-7.2 3.2-8 8-.8-4.8-3.2-7.2-8-8 4.8-.8 7.2-3.2 8-8Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

const FIREFLIES = [
  { left: "8%", top: "26%", dx: "34px", dy: "-42px", delay: "-2s", duration: "17s", size: 4, tone: "gold" },
  { left: "16%", top: "62%", dx: "-24px", dy: "-36px", delay: "-7s", duration: "21s", size: 3, tone: "lavender" },
  { left: "24%", top: "40%", dx: "22px", dy: "38px", delay: "-4s", duration: "15s", size: 5, tone: "gold" },
  { left: "34%", top: "74%", dx: "38px", dy: "-26px", delay: "-11s", duration: "23s", size: 3, tone: "moss" },
  { left: "42%", top: "30%", dx: "-30px", dy: "44px", delay: "-1s", duration: "19s", size: 4, tone: "gold" },
  { left: "55%", top: "18%", dx: "26px", dy: "34px", delay: "-8s", duration: "16s", size: 3, tone: "lavender" },
  { left: "62%", top: "70%", dx: "-36px", dy: "-30px", delay: "-3s", duration: "22s", size: 5, tone: "gold" },
  { left: "71%", top: "44%", dx: "-20px", dy: "42px", delay: "-9s", duration: "18s", size: 3, tone: "moss" },
  { left: "79%", top: "22%", dx: "30px", dy: "-38px", delay: "-5s", duration: "20s", size: 4, tone: "gold" },
  { left: "86%", top: "60%", dx: "-28px", dy: "-24px", delay: "-13s", duration: "24s", size: 3, tone: "lavender" },
  { left: "93%", top: "36%", dx: "-34px", dy: "36px", delay: "-2.5s", duration: "17s", size: 4, tone: "gold" },
  { left: "50%", top: "54%", dx: "28px", dy: "-44px", delay: "-10s", duration: "25s", size: 3, tone: "gold" },
  { left: "12%", top: "80%", dx: "30px", dy: "20px", delay: "-6s", duration: "19s", size: 3, tone: "gold" },
  { left: "68%", top: "84%", dx: "-34px", dy: "24px", delay: "-12s", duration: "21s", size: 4, tone: "lavender" },
];

export function Fireflies({ dim = false }: { dim?: boolean }) {
  return (
    <div className={`fireflies${dim ? " fireflies--dim" : ""}`} aria-hidden="true">
      {FIREFLIES.map((fly, index) => (
        <span
          key={index}
          className={`firefly firefly--${fly.tone}`}
          style={
            {
              left: fly.left,
              top: fly.top,
              width: fly.size,
              height: fly.size,
              "--dx": fly.dx,
              "--dy": fly.dy,
              "--delay": fly.delay,
              "--duration": fly.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
