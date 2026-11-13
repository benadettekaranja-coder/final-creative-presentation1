interface CauldronProps {
  active?: boolean;
  variant?: "scene" | "intro" | "final";
  className?: string;
}

export function Cauldron({
  active = false,
  variant = "scene",
  className = "",
}: CauldronProps) {
  return (
    <svg
      className={`cauldron cauldron--${variant}${active ? " is-brewing" : ""}${className ? ` ${className}` : ""}`}
      viewBox="0 0 640 620"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="iron-body" x1="0.15" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#575047" />
          <stop offset="0.32" stopColor="#3b352f" />
          <stop offset="0.68" stopColor="#2b2824" />
          <stop offset="1" stopColor="#211f1c" />
        </linearGradient>
        <linearGradient id="brass-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EBD5A2" />
          <stop offset="0.28" stopColor="#C6A66A" />
          <stop offset="0.62" stopColor="#9A7A43" />
          <stop offset="1" stopColor="#6F552B" />
        </linearGradient>
        <linearGradient id="brass-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9A7A43" />
          <stop offset="1" stopColor="#5F4A27" />
        </linearGradient>
        <radialGradient id="brew-surface" cx="0.42" cy="0.38" r="0.72">
          <stop offset="0" stopColor="#FFF1C8" />
          <stop offset="0.34" stopColor="#F0D699" />
          <stop offset="0.68" stopColor="#C9AC67" />
          <stop offset="1" stopColor="#8B8A57" />
        </radialGradient>
        <radialGradient id="ambient-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F7DFA4" stopOpacity="0.72" />
          <stop offset="0.55" stopColor="#E4C27C" stopOpacity="0.28" />
          <stop offset="1" stopColor="#C6A66A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mouth-shadow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#2A261F" />
          <stop offset="1" stopColor="#171512" />
        </radialGradient>
        <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="foot-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <clipPath id="brew-clip">
          <ellipse cx="320" cy="288" rx="176" ry="29" />
        </clipPath>
      </defs>

      <ellipse
        className="cauldron__ambient"
        cx="320"
        cy="330"
        rx="286"
        ry="236"
        fill="url(#ambient-glow)"
      />

      {/* back leg */}
      <path
        d="M322 460c-7 30-9 55-8 78"
        fill="none"
        stroke="#24211d"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* handles, drawn behind the body so the joins disappear */}
      <g>
        <circle cx="101" cy="338" r="37" fill="none" stroke="#29251f" strokeWidth="17" />
        <circle cx="101" cy="338" r="37" fill="none" stroke="url(#brass-rim)" strokeWidth="10" />
        <path
          d="M101 301a37 37 0 0 1 32 18"
          fill="none"
          stroke="#F3DFAE"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle cx="539" cy="338" r="37" fill="none" stroke="#29251f" strokeWidth="17" />
        <circle cx="539" cy="338" r="37" fill="none" stroke="url(#brass-rim)" strokeWidth="10" />
        <path
          d="M539 301a37 37 0 0 0-32 18"
          fill="none"
          stroke="#F3DFAE"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>

      {/* ground shadow */}
      <ellipse
        cx="320"
        cy="558"
        rx="208"
        ry="24"
        fill="#4A3E2C"
        opacity="0.2"
        filter="url(#foot-blur)"
      />

      {/* front legs */}
      <path
        d="M208 470c-10 28-15 54-16 76"
        fill="none"
        stroke="#29251f"
        strokeWidth="19"
        strokeLinecap="round"
      />
      <path
        d="M432 470c10 28 15 54 16 76"
        fill="none"
        stroke="#29251f"
        strokeWidth="19"
        strokeLinecap="round"
      />
      <path
        d="M206 473c-7 24-11 44-12 62"
        fill="none"
        stroke="#5B5348"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M434 473c7 24 11 44 12 62"
        fill="none"
        stroke="#5B5348"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <ellipse cx="191" cy="550" rx="17" ry="8" fill="#2A2621" />
      <ellipse cx="449" cy="550" rx="17" ry="8" fill="#2A2621" />

      {/* body */}
      <path
        className="cauldron__body"
        d="M124 274c-12 53-5 109 32 157 32 42 94 69 165 69s134-27 166-69c36-48 43-104 31-157Z"
        fill="url(#iron-body)"
        stroke="#1D1B18"
        strokeWidth="2.6"
      />
      <path
        d="M139 306c-7 45 2 88 32 122"
        fill="none"
        stroke="#9C9180"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.28"
      />
      <path
        d="M506 312c6 41-2 82-30 116"
        fill="none"
        stroke="#7E7364"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.18"
      />

      {/* patina and wear */}
      <path
        d="M206 436c25-12 45-4 56 14 6 10-3 22-18 26-25 7-45-6-50-20-3-8 3-15 12-20Z"
        fill="#526B52"
        opacity="0.14"
      />
      <path
        d="M410 396c19-8 36-1 42 12 4 10-4 18-16 20-19 4-32-4-35-14-2-8 2-14 9-18Z"
        fill="#89977A"
        opacity="0.12"
      />
      <g fill="#C6A66A" opacity="0.28">
        <circle cx="232" cy="360" r="1.8" />
        <circle cx="257" cy="444" r="1.4" />
        <circle cx="391" cy="458" r="1.7" />
        <circle cx="462" cy="366" r="1.3" />
        <circle cx="351" cy="330" r="1.1" />
      </g>

      {/* engraved botanical motif */}
      <g className="cauldron__engraving" opacity="0.55">
        <path
          d="M321 350c-16 1-27 14-27 30 0 17 12 30 28 30-10-8-16-18-16-30 0-11 6-22 15-30Z"
          fill="#C6A66A"
        />
        <path
          d="M260 419c18-13 34-9 45 1 12-11 29-13 46-1"
          fill="none"
          stroke="#C6A66A"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M281 414c2-11 9-18 19-20-2 10-8 17-19 20ZM358 414c-2-11-9-18-19-20 2 10 8 17 19 20Z"
          fill="#C6A66A"
          opacity="0.8"
        />
        <path
          d="M244 386c0-8 4-14 11-17M398 392c0-8-4-14-11-17"
          fill="none"
          stroke="#C6A66A"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M248 380c-4-1-7-4-8-8 4 0 7 3 8 8ZM394 386c4-1 7-4 8-8-4 0-7 3-8 8Z"
          fill="#C6A66A"
        />
        <path
          d="M274 366c1.2 3.6 2.6 5 6.2 6.2-3.6 1.2-5 2.6-6.2 6.2-1.2-3.6-2.6-5-6.2-6.2 3.6-1.2 5-2.6 6.2-6.2ZM368 350c.9 2.8 2 3.9 4.8 4.8-2.8.9-3.9 2-4.8 4.8-.9-2.8-2-3.9-4.8-4.8 2.8-.9 3.9-2 4.8-4.8Z"
          fill="#C6A66A"
          opacity="0.75"
        />
      </g>

      {/* rim */}
      <ellipse cx="320" cy="282" rx="199" ry="46" fill="url(#brass-dark)" />
      <ellipse
        cx="320"
        cy="282"
        rx="199"
        ry="46"
        fill="none"
        stroke="#2B2419"
        strokeWidth="2.4"
      />
      <ellipse cx="320" cy="281" rx="190" ry="39" fill="url(#brass-rim)" />
      <ellipse cx="320" cy="282" rx="178" ry="33" fill="url(#mouth-shadow)" />
      <ellipse
        cx="320"
        cy="279"
        rx="197"
        ry="44"
        fill="none"
        stroke="#F3DFAE"
        strokeWidth="1.6"
        opacity="0.45"
        strokeDasharray="150 260"
        strokeLinecap="round"
      />
      <g fill="url(#brass-rim)" stroke="#5C4726" strokeWidth="0.8">
        <circle cx="160" cy="306" r="3.2" />
        <circle cx="230" cy="317" r="3.2" />
        <circle cx="320" cy="321" r="3.2" />
        <circle cx="410" cy="317" r="3.2" />
        <circle cx="480" cy="306" r="3.2" />
        <circle cx="142" cy="288" r="2.6" />
        <circle cx="498" cy="288" r="2.6" />
      </g>

      {/* brew */}
      <ellipse
        className="cauldron__brew-glow"
        cx="320"
        cy="281"
        rx="182"
        ry="37"
        fill="#F7D99A"
        opacity="0.5"
        filter="url(#soft-glow)"
      />
      <ellipse cx="320" cy="288" rx="176" ry="29" fill="url(#brew-surface)" />
      <ellipse
        cx="320"
        cy="288"
        rx="176"
        ry="29"
        fill="none"
        stroke="#7C6738"
        strokeWidth="1.4"
        opacity="0.6"
      />
      <path
        d="M190 288c24-12 65-18 112-18 48 0 99 6 144 21"
        fill="none"
        stroke="#FFF4D7"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M247 297c33 5 71 7 108 4 23-2 42-5 57-10"
        fill="none"
        stroke="#9E8D5B"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />

      <g clipPath="url(#brew-clip)">
        {[
          { cx: 236, cy: 294, r: 6.5 },
          { cx: 272, cy: 302, r: 4 },
          { cx: 310, cy: 288, r: 8.5 },
          { cx: 348, cy: 298, r: 4.6 },
          { cx: 384, cy: 291, r: 6 },
          { cx: 416, cy: 300, r: 3.4 },
          { cx: 296, cy: 281, r: 2.8 },
          { cx: 362, cy: 282, r: 3.8 },
          { cx: 201, cy: 290, r: 3 },
          { cx: 442, cy: 289, r: 2.6 },
        ].map((bubble, index) => (
          <circle
            key={index}
            className="cauldron__bubble"
            cx={bubble.cx}
            cy={bubble.cy}
            r={bubble.r}
            fill="#F8E7B6"
            stroke="#CDB47A"
            strokeWidth="0.7"
            opacity="0.85"
          />
        ))}
      </g>

      {/* a leaf stirring on the surface */}
      <g transform="translate(392 279) rotate(-18)">
        <path
          d="M0 0c8-6 17-6 24 0-7 6-16 6-24 0Z"
          fill="#A8B089"
          stroke="#6F7C5C"
          strokeWidth="0.8"
        />
        <path d="M2 0h19" stroke="#6F7C5C" strokeWidth="0.7" opacity="0.7" />
      </g>

      {/* steam */}
      <g className="cauldron__steam" fill="none" stroke="#F2DFAF" strokeLinecap="round">
        <path
          d="M268 256c-15-31 23-47 8-79-7-15-6-27 1-40"
          strokeWidth="3.2"
          opacity="0.34"
        />
        <path
          d="M320 250c-9-35 27-52 12-88-6-15-3-28 4-39"
          strokeWidth="3.6"
          opacity="0.4"
        />
        <path
          d="M374 256c12-27-22-43-8-71 6-13 5-26-1-37"
          strokeWidth="2.8"
          opacity="0.3"
        />
      </g>

      {/* wandering motes */}
      <g className="cauldron__motes" fill="#F4E0AF">
        <path
          className="cauldron__mote cauldron__mote--1"
          d="M220 214c.9 3.6 2.5 5.2 6.1 6.1-3.6.9-5.2 2.5-6.1 6.1-.9-3.6-2.5-5.2-6.1-6.1 3.6-.9 5.2-2.5 6.1-6.1Z"
        />
        <path
          className="cauldron__mote cauldron__mote--2"
          d="M442 190c1.2 4.8 3.4 7 8.2 8.2-4.8 1.2-7 3.4-8.2 8.2-1.2-4.8-3.4-7-8.2-8.2 4.8-1.2 7-3.4 8.2-8.2Z"
        />
        <circle className="cauldron__mote cauldron__mote--3" cx="365" cy="150" r="3" />
        <circle className="cauldron__mote cauldron__mote--4" cx="256" cy="166" r="2.4" />
        <circle className="cauldron__mote cauldron__mote--5" cx="410" cy="238" r="2" />
      </g>

      {/* handle lugs */}
      <g fill="url(#brass-rim)" stroke="#3A3022" strokeWidth="1.2">
        <ellipse cx="130" cy="312" rx="11" ry="9" transform="rotate(-18 130 312)" />
        <ellipse cx="510" cy="312" rx="11" ry="9" transform="rotate(18 510 312)" />
      </g>
    </svg>
  );
}
