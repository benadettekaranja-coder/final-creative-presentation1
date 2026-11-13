export function MicrophoneObject() {
  return (
    <svg viewBox="0 0 200 200" className="object-art" aria-hidden="true" focusable="false">
      <ellipse cx="100" cy="178" rx="40" ry="7" fill="#302D29" opacity="0.14" />
      <path
        d="M56 76c-8-20 4-42 22-48M48 108c-12-5-21-14-25-25"
        fill="none"
        stroke="#A99BBE"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M150 150c7-13 8-27 4-40M158 96c4-6 6-13 6-20"
        fill="none"
        stroke="#C6A66A"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.65"
      />
      <g transform="rotate(-3 100 100)">
        <ellipse cx="100" cy="174" rx="27" ry="5.5" fill="#3B352D" />
        <path
          d="M100 172v-24"
          stroke="#3B352D"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M100 148v-14"
          stroke="#574C3B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M74 53c0-14 11-25 26-25s26 11 26 25v55c0 14-11 25-26 25s-26-11-26-25Z"
          fill="#3A342E"
          stroke="#211F1C"
          strokeWidth="2.2"
        />
        <path
          d="M80 50c0-10 9-17 20-17s20 7 20 17v50c0 10-9 17-20 17s-20-7-20-17Z"
          fill="#282520"
          stroke="#171512"
          strokeWidth="1.4"
        />
        <g stroke="#C6A66A" strokeWidth="1.1" opacity="0.6">
          <path d="M80 56h40M80 65h40M80 74h40M80 83h40M80 92h40M80 101h40" />
          <path d="M88 45v63M96 42v68M104 42v68M112 45v63" opacity="0.7" />
        </g>
        <path
          d="M74 104c17 8 35 8 52 0v10c-17 9-35 9-52 0Z"
          fill="#8C6E3D"
          stroke="#5E4A29"
          strokeWidth="1.2"
        />
        <path
          d="M70 116h60"
          stroke="#C6A66A"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M74 118c16 7 36 7 52 0"
          fill="none"
          stroke="#E8D09B"
          strokeWidth="1.2"
          opacity="0.8"
        />
        <circle cx="100" cy="28" r="4.5" fill="#C6A66A" stroke="#7C5F32" strokeWidth="1" />
        <path
          d="M83 42c-6 14-6 29 0 43"
          fill="none"
          stroke="#8E8577"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
      <g fill="#C6A66A">
        <path d="M160 58c.8 3.2 2.2 4.6 5.4 5.4-3.2.8-4.6 2.2-5.4 5.4-.8-3.2-2.2-4.6-5.4-5.4 3.2-.8 4.6-2.2 5.4-5.4Z" />
        <path d="M42 132c.7 2.8 2 4.1 4.8 4.8-2.8.7-4.1 2-4.8 4.8-.7-2.8-2-4.1-4.8-4.8 2.8-.7 4.1-2 4.8-4.8Z" opacity="0.8" />
        <circle cx="153" cy="124" r="2.2" opacity="0.7" />
      </g>
      <path
        d="M39 90c3-9 9-16 17-21"
        fill="none"
        stroke="#A99BBE"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function LightbulbObject() {
  return (
    <svg viewBox="0 0 200 200" className="object-art" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="bulb-glass" cx="0.42" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFF6D9" />
          <stop offset="0.55" stopColor="#F3DFA8" />
          <stop offset="1" stopColor="#DFC183" />
        </radialGradient>
        <radialGradient id="bulb-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F4D28C" stopOpacity="0.48" />
          <stop offset="1" stopColor="#F4D28C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="44" ry="7" fill="#302D29" opacity="0.13" />
      <circle cx="100" cy="83" r="74" fill="url(#bulb-halo)" />
      <g stroke="#B08A45" strokeWidth="1.6" strokeLinecap="round" opacity="0.75">
        <path d="M34 56 26 48M166 56l8-8M31 96h-11M169 96h11" />
        <path d="M42 28 37 20M158 28l5-8" opacity="0.6" />
      </g>
      <path
        d="M100 126h-14c0-11-5-17-12-24-10-10-17-23-17-37 0-24 19-43 43-43s43 19 43 43c0 14-7 27-17 37-7 7-12 13-12 24Z"
        fill="url(#bulb-glass)"
        stroke="#3A362E"
        strokeWidth="2.2"
      />
      <path
        d="M84 112c-2-12-8-18-15-25-7-8-11-15-11-25 0-17 12-31 29-34"
        fill="none"
        stroke="#FFFDF1"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M92 126c-1-15 0-24 8-31 8 7 9 16 8 31"
        fill="none"
        stroke="#A9843F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <g fill="none" stroke="#B08A45" strokeLinecap="round">
        <path d="M92 108c3-8 6-11 8-17 2 6 5 9 8 17" strokeWidth="2.1" />
        <path d="M96 91v-8M104 91v-8" strokeWidth="1.6" />
        <path d="M100 74v-9M100 65l5 5M100 65l-5 5" strokeWidth="1.4" opacity="0.8" />
      </g>
      <path
        d="M86 126h28v8c0 3-2 5-5 5H91c-3 0-5-2-5-5Z"
        fill="#B08A45"
        stroke="#6F552B"
        strokeWidth="1.2"
      />
      <g fill="#D8BE7F" stroke="#6F552B" strokeWidth="0.9">
        <path d="M88 139h24v6H88Z" />
        <path d="M89 145h22v6H89Z" opacity="0.9" />
        <path d="M92 151h16v5H92Z" opacity="0.8" />
      </g>
      <path
        d="M100 156v7"
        stroke="#3A362E"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <g fill="#C6A66A">
        <path d="M160 74c.9 3.6 2.5 5.2 6.1 6.1-3.6.9-5.2 2.5-6.1 6.1-.9-3.6-2.5-5.2-6.1-6.1 3.6-.9 5.2-2.5 6.1-6.1Z" />
        <path d="M36 128c.7 2.8 2 4.1 4.8 4.8-2.8.7-4.1 2-4.8 4.8-.7-2.8-2-4.1-4.8-4.8 2.8-.7 4.1-2 4.8-4.8Z" />
      </g>
      <path
        d="M146 144c11-10 17-22 18-36"
        fill="none"
        stroke="#89977A"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M156 121c6-1 11-5 13-11-6 1-11 5-13 11ZM160 135c6 1 11-1 15-5-5-2-11-1-15 5Z"
        fill="#89977A"
        opacity="0.8"
      />
    </svg>
  );
}

export function ScrollObject() {
  return (
    <svg viewBox="0 0 200 200" className="object-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="scroll-paper" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#E9D7B6" />
          <stop offset="0.5" stopColor="#F8EEDB" />
          <stop offset="1" stopColor="#DFC9A2" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="178" rx="45" ry="7" fill="#302D29" opacity="0.13" />
      <g transform="rotate(2 100 100)">
        <path
          d="M72 30v141c0 5 4 8 9 8h38c5 0 9-3 9-8V30Z"
          fill="url(#scroll-paper)"
          stroke="#8D744C"
          strokeWidth="1.6"
        />
        <path
          d="M71 34h58v-8c0-5-4-8-9-8H80c-5 0-9 3-9 8Z"
          fill="#E2CDA8"
          stroke="#8D744C"
          strokeWidth="1.4"
        />
        <ellipse cx="100" cy="26" rx="29" ry="7" fill="#F3E4C6" stroke="#8D744C" strokeWidth="1.4" />
        <path
          d="M71 171h58v7c0 5-4 8-9 8H80c-5 0-9-3-9-8Z"
          fill="#DCC59E"
          stroke="#8D744C"
          strokeWidth="1.4"
        />
        <ellipse cx="100" cy="183" rx="29" ry="6.5" fill="#EBD9B9" stroke="#8D744C" strokeWidth="1.4" />
        <path
          d="M84 8v8M116 8v8"
          stroke="#C6A66A"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="84" cy="6" r="3" fill="#C6A66A" stroke="#7C5F32" strokeWidth="0.8" />
        <circle cx="116" cy="6" r="3" fill="#C6A66A" stroke="#7C5F32" strokeWidth="0.8" />
        <path
          d="M84 183v8M116 183v8"
          stroke="#C6A66A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <g stroke="#6E6049" strokeWidth="1.2" strokeLinecap="round" opacity="0.65">
          <path d="M82 56h36M82 68h30M82 80h36M82 92h24" />
        </g>
        <path
          d="M82 105h22"
          stroke="#6E6049"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M84 123c8-7 17-7 25 0"
          fill="none"
          stroke="#8D744C"
          strokeWidth="1"
          opacity="0.5"
        />
        <g transform="translate(100 140)">
          <circle r="17" fill="#B08A45" stroke="#6F552B" strokeWidth="1.5" />
          <circle r="12.5" fill="none" stroke="#E3CA93" strokeWidth="0.9" opacity="0.7" />
          <path
            d="M0-6c5 2 7 6 0 10-7-4-5-8 0-10Z"
            fill="#E9D8AE"
            stroke="#7C5F32"
            strokeWidth="0.8"
          />
          <path d="M0-3v7" stroke="#7C5F32" strokeWidth="0.8" />
          <path
            d="M-15 12c-8 6-9 16-3 23M15 12c8 6 9 16 3 23"
            fill="none"
            stroke="#A99BBE"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
        <path
          d="M84 56c4-8 12-12 20-11"
          fill="none"
          stroke="#C6A66A"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M116 55c-1-5 1-9 5-12"
          fill="none"
          stroke="#89977A"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
      <g fill="#C6A66A">
        <path d="M153 58c.8 3.2 2.2 4.6 5.4 5.4-3.2.8-4.6 2.2-5.4 5.4-.8-3.2-2.2-4.6-5.4-5.4 3.2-.8 4.6-2.2 5.4-5.4Z" opacity="0.9" />
        <circle cx="42" cy="121" r="2.2" opacity="0.7" />
      </g>
      <path
        d="M36 84c4 3 8 3 12 0M152 128c4 3 8 3 12 0"
        fill="none"
        stroke="#89977A"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

export function ThreadObject() {
  return (
    <svg viewBox="0 0 200 200" className="object-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="spool-wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9C7C4E" />
          <stop offset="1" stopColor="#6B512F" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="179" rx="49" ry="7" fill="#302D29" opacity="0.13" />
      <g transform="rotate(-18 82 126)">
        <rect x="66" y="96" width="32" height="62" rx="8" fill="url(#spool-wood)" stroke="#4F3C23" strokeWidth="1.4" />
        <ellipse cx="70" cy="127" rx="7" ry="36" fill="#7D5F38" stroke="#4F3C23" strokeWidth="1.3" />
        <ellipse cx="94" cy="127" rx="7" ry="36" fill="#8A6A40" stroke="#4F3C23" strokeWidth="1.3" />
        <g stroke="#C6A66A" strokeWidth="2.2" opacity="0.9">
          <path d="M75 99c4 17 4 39 0 58" />
          <path d="M82 98c4 18 4 41 0 60" />
          <path d="M89 99c4 17 4 39 0 58" />
        </g>
        <ellipse cx="82" cy="97" rx="13" ry="4" fill="#E4C58A" stroke="#7C5F32" strokeWidth="1" />
      </g>
      <path
        d="M85 96c17-11 29-21 44-22 20-1 26 22 13 32-14 11-33-5-26-22 7-16 38-18 50-2 8 11 2 26-11 31-12 5-23-4-18-14 4-8 15-9 22-3"
        fill="none"
        stroke="#C6A66A"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M85 96c17-11 29-21 44-22 20-1 26 22 13 32-14 11-33-5-26-22 7-16 38-18 50-2 8 11 2 26-11 31-12 5-23-4-18-14 4-8 15-9 22-3"
        fill="none"
        stroke="#EBD6A4"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <g transform="translate(159 96)">
        <path
          d="M0-9c2.8 5 7.5 9.8 12.5 12.7-5 2.9-9.7 7.6-12.5 12.7C-2.8 11.4-7.5 6.7-12.5 3.8-7.5.9-2.8-4 0-9Z"
          fill="#D8B669"
          stroke="#8C6A34"
          strokeWidth="1.2"
        />
        <circle cx="0" cy="3.5" r="2.2" fill="#8C6A34" />
      </g>
      <g transform="translate(107 53)">
        <path
          d="M0-7c2.2 4 6 7.8 10 10-4 2.3-7.8 6-10 10-2.2-4-6-7.7-10-10 4-2.2 7.8-6 10-10Z"
          fill="#B4A7C6"
          stroke="#6F6386"
          strokeWidth="1.1"
        />
        <circle cx="0" cy="3" r="1.8" fill="#6F6386" />
      </g>
      <g fill="#C6A66A">
        <circle cx="38" cy="64" r="2.4" opacity="0.8" />
        <circle cx="51" cy="46" r="1.7" opacity="0.6" />
      </g>
      <g fill="none" stroke="#89977A" strokeWidth="1.3" strokeLinecap="round" opacity="0.7">
        <path d="M34 142c8-2 14-8 17-16M166 138c-7-3-12-8-15-15" />
      </g>
      <path
        d="M158 158c5-1 9-4 12-8-5-1-9 2-12 8Z"
        fill="#89977A"
        opacity="0.8"
      />
      <path
        d="M40 158c-4-8-11-12-20-12 3 8 10 12 20 12Z"
        fill="#89977A"
        opacity="0.65"
      />
    </svg>
  );
}

export function MirrorObject() {
  return (
    <svg viewBox="0 0 200 200" className="object-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mirror-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#DDE1D4" />
          <stop offset="0.45" stopColor="#C2C6C4" />
          <stop offset="1" stopColor="#AEB0C0" />
        </linearGradient>
        <linearGradient id="mirror-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D9BC80" />
          <stop offset="0.55" stopColor="#B08A45" />
          <stop offset="1" stopColor="#7D5F32" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="180" rx="38" ry="6.5" fill="#302D29" opacity="0.13" />
      <g transform="rotate(-4 100 90)">
        <path
          d="M100 128c-6 0-10 4-10 10v16c0 6 4 10 10 10s10-4 10-10v-16c0-6-4-10-10-10Z"
          fill="url(#mirror-frame)"
          stroke="#5E4726"
          strokeWidth="1.6"
          transform="translate(0 14)"
        />
        <ellipse cx="100" cy="78" rx="51" ry="60" fill="url(#mirror-frame)" stroke="#5E4726" strokeWidth="1.8" />
        <ellipse cx="100" cy="78" rx="43" ry="52" fill="#F0E4C7" stroke="#8C6A34" strokeWidth="1" />
        <ellipse cx="100" cy="78" rx="38" ry="47" fill="url(#mirror-glass)" stroke="#6A675F" strokeWidth="1.4" />
        <path
          d="M100 47c-10 6-15 16-13 28 2 12 11 21 22 23-7-7-10-15-9-24 1-10 6-19 14-25-5-2-9-2-14-2Z"
          fill="#F6F1DE"
          opacity="0.75"
        />
        <g fill="#F4E7B9">
          <path d="M119 66c.8 3.2 2.2 4.6 5.4 5.4-3.2.8-4.6 2.2-5.4 5.4-.8-3.2-2.2-4.6-5.4-5.4 3.2-.8 4.6-2.2 5.4-5.4Z" />
          <path d="M109 97c.6 2.4 1.6 3.4 4 4-2.4.6-3.4 1.6-4 4-.6-2.4-1.6-3.4-4-4 2.4-.6 3.4-1.6 4-4Z" opacity="0.8" />
          <circle cx="126" cy="90" r="1.4" />
        </g>
        <path
          d="M100 50c-9 5-14 14-14 24 0 13 7 24 19 29"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.4"
        />
        <g fill="#8C6A34">
          <path d="M57 56c-5-3-9-8-10-13 6 1 10 5 12 11ZM143 56c5-3 9-8 10-13-6 1-10 5-12 11Z" />
          <path d="M59 112c-6-1-11-4-14-9 6-1 11 2 14 9ZM141 112c6-1 11-4 14-9-6-1-11 2-14 9Z" />
        </g>
        <path
          d="M95 137c2-3 8-3 10 0 2 3 0 7-2 9l-3 3-3-3c-2-2-4-6-2-9Z"
          fill="#A99BBE"
          stroke="#6F6386"
          strokeWidth="1"
          transform="translate(0 6)"
        />
        <path
          d="M98 150c-8 4-10 13-6 21M112 148c9 5 12 14 8 23"
          fill="none"
          stroke="#A99BBE"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.75"
          transform="translate(0 8)"
        />
      </g>
      <g fill="#C6A66A">
        <circle cx="36" cy="88" r="2.2" opacity="0.7" />
        <circle cx="166" cy="70" r="1.8" opacity="0.65" />
      </g>
      <path
        d="M158 142c8-4 13-11 14-20-8 4-13 11-14 20Z"
        fill="#89977A"
        opacity="0.7"
      />
    </svg>
  );
}
