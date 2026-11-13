# The Things We Brew

An interactive, storybook-style presentation for the **KamiLimu Cohort 10 Peer Mentorship Experience**. A central cauldron holds five ingredients. Each pull surfaces one story at random, and when all five have been discovered the experience closes on a final note: *Still becoming. Still brewing.*

Built with Next.js (App Router), React, TypeScript and hand-written CSS. There is no backend, database, authentication or external API — every screen, animation and asset is local, so the whole experience can be deployed as static/SSR frontend hosting.

---

## 1. Requirements and setup (including WSL)

- **Node.js 20.9 or newer** (developed on Node 24)
- **npm** (bundled with Node)

```bash
# from this project folder
npm install
npm run dev
```

Open **http://localhost:3000** in a browser.

### Running inside WSL

Keep the project in the Linux filesystem (for example `~/final-creative-presentation`), not on `/mnt/c/...`. File watching and installs are much faster there.

1. In a WSL terminal, `cd` into the project and run `npm run dev`.
2. In a Windows browser, open **http://localhost:3000**. WSL 2 forwards localhost by default.

If localhost forwarding is unavailable, start the server on all interfaces and use the WSL IP:

```bash
npm run dev -- --hostname 0.0.0.0
# then find the address with: hostname -I
# and open http://<wsl-ip>:3000 in Windows
```

If `node` is not found, your Node install may live under `nvm`; run `nvm use --lts` (or open a shell where nvm is loaded) before `npm install`.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run ESLint |

---

## 2. How the experience works

Screens are views inside one client component, not separate routes.

1. **Intro** — “The Things We Brew”, the opening copy, and **Enter the garden**.
2. **Cauldron** — **What’s brewing?** and **Pull an ingredient**. The cauldron bubbles, shakes and releases sparks; one ingredient object rises out of the pot.
3. **Scroll overlay** — the ingredient’s story opens in a parchment scroll over the cauldron scene. The scene stays faintly visible behind a dim backdrop. The scroll content scrolls inside the panel, and can be closed with the close button, **Back to the cauldron**, `Escape`, or (when it is the last ingredient) the final transition.
4. **Final reveal** — *Still becoming. Still brewing.*, the closing message, the portrait placeholder and the cauldron, with a quiet **Begin again** restart.

Interaction rules implemented:

- All five ingredients are shuffled with a Fisher–Yates shuffle when the garden is entered.
- Each pull advances a queue pointer, so no ingredient repeats until a restart.
- The discovery counter and five stars update as each story is opened.
- Pulling is disabled while the cauldron is brewing or a scroll is open.
- Closing a scroll leaves the session’s order intact; only **Begin again** reshuffles.
- On the fifth close, the final reveal replaces the cauldron scene automatically.

### Keyboard and screen readers

- The sequence is fully operable with `Tab`, `Shift+Tab`, `Enter`/`Space` and `Escape`.
- The scroll is a modal dialog (`role="dialog"`, `aria-modal="true"`, labelled heading) with a Tab focus trap, body scroll lock, and focus returned to **Pull an ingredient** when it closes.
- Focus moves to the cauldron heading on entry and the final heading on the reveal.
- Each discovery is announced through a polite live region.
- All animation is disabled or shortened under `prefers-reduced-motion: reduce`.

### Timing

The pacing constants live in **`src/components/Experience.tsx`** (intro transition, brew → emergence, emergence → scroll). They already have reduced-motion alternatives; adjust them there if you want a slower or brisker presentation.

---

## 3. Project structure

```text
src/
  app/
    layout.tsx        Fonts, metadata, theme colour
    page.tsx          Renders <Experience />
    globals.css       All styles, organised by section
    icon.svg          Cauldron favicon
  components/
    Experience.tsx    Screen/phase state machine and timings
    IntroScreen.tsx
    CauldronScene.tsx
    ScrollOverlay.tsx Accessible scroll dialog
    MemoryGallery.tsx Images or designed placeholders
    FinalReveal.tsx
    Cauldron.tsx      Inline SVG cauldron (no emoji/generic pot)
    Botanicals.tsx    Sprigs, ornaments, fireflies, stars, garden floor
    IngredientObject.tsx
    objects/
      IngredientArt.tsx  The five illustrated ingredients
  data/
    copy.ts           Interface copy (titles, labels, closing words)
    ingredients.ts    The five stories, notes, media and final portrait
  hooks/
    useIngredientSequence.ts  Shuffle, queue pointer, progress
    usePrefersReducedMotion.ts
  types/
    index.ts          Shared types
public/
  images/             Your photographs and screenshots (see §5)
```

**Architecture in one sentence:** `Experience` owns navigation and timing; presentational components receive props; all editable words and media metadata live in `src/data`; all styling lives in one sectioned stylesheet.

The visual layer uses inline SVG for the cauldron, botanicals and ingredient objects, so no decorative image files are required. Fonts (Cormorant Garamond for display, Lora for body) are self-hosted through `next/font`, so the deployed site does not depend on Google Fonts at runtime.

---

## 4. Editing the words

### Interface copy — `src/data/copy.ts`

Titles, eyebrow labels, button labels, the scroll UI labels and the closing paragraphs are grouped in `siteCopy`, `introCopy`, `cauldronCopy`, `scrollCopy` and `finalCopy`.

### Ingredient stories — `src/data/ingredients.ts`

Each ingredient has:

| Field | Purpose |
| --- | --- |
| `id`, `numeral`, `objectName` | Identity and ordering label |
| `theme` | The story title shown in the scroll |
| `intro` | One-line italic summary |
| `reflection` | Paragraphs of the personal reflection |
| `notes` | Optional “From the notebook” facts |
| `mediaLabel` | Heading above the gallery |
| `media` | Photographs/screenshots or placeholders |
| `tone` | Styling accent for the ingredient object |
| `closing` | Optional closing line before the scroll footer |

The **Professional Development reflection is intentionally provisional** and marked as such in the data file. Replace it with the final wording when it is ready; do not add details that were not actually experienced.

Please keep the personal voice intact when editing. The placeholder text was written to describe what could live in each slot, not to claim anything happened.

---

## 5. Photographs, screenshots and the portrait

Three photographs are already integrated:

| File | Where it appears |
| --- | --- |
| `public/images/friendships/beginning.jpg` | The Mirror scroll — “The beginning.” (first day) |
| `public/images/public-speaking/competition.jpg` | The Microphone scroll — “Speech day.” |
| `public/images/final/portrait.jpg` | The final reveal portrait |

To add more later, place the file inside `public/images/<ingredient-folder>/` (create the folder if needed), then give the matching media entry in `src/data/ingredients.ts` a `src` and descriptive `alt`:

```ts
{
  src: "/images/public-speaking/finals.jpg",
  alt: "Speaking during the finals",
  caption: "The finals.",
  aspect: "4 / 3",
  span: "wide",
  suggestedFile: "public-speaking/finals.jpg",
}
```

Ingredients with an empty `media: []` show no gallery at all; slots without a `src` render as clearly labelled placeholders showing the expected file path.

Notes:

- Paths start with `/images/...` because they are served from `public/`. Never use an absolute filesystem path such as `/home/...`.
- Use **exact, case-sensitive filenames** — the project runs on Linux, where `Finals.JPG` and `finals.jpg` are different files.
- `alt` should describe what the image shows, not repeat the caption. For decorative-only images, use an empty alt; the type requires `alt` whenever `src` is present.
- Keep `aspect` roughly matching the real image and `span` (`wide`, `half`, `third`) to control how much room it gets in the gallery. See `src/types/index.ts` for the full media type.
- If a crop cuts something important (for example a face), add `focus: "center 20%"` to the entry to shift the visible area.
- The final portrait lives in `finalPortrait` at the bottom of `src/data/ingredients.ts`; it expects a portrait crop (`3 / 4`).
- If you publish a CV or cover letter, hide personal details first.

Images are rendered with `next/image` inside fixed aspect-ratio frames, so they crop consistently rather than distort.

---

## 6. Design and styling

- **Palette tokens** (parchment `#F4EBDD`, forest `#526B52`, lavender `#A99BBE`, gold `#C6A66A`, ink `#302D29`, moss `#89977A`) are CSS custom properties at the top of `src/app/globals.css`.
- **`globals.css` is divided into labelled sections**: tokens/reset, typography, atmosphere, intro, cauldron scene, animations, scroll overlay, gallery, final reveal, responsive breakpoints, and reduced motion. Edit the relevant section rather than adding overrides at the end.
- Responsive breakpoints are at `1060px`, `900px`, `700px` and `420px`, plus a height-based adjustment for projector screens (`max-height: 860px`).
- The layout is tested at 1440×900, 1366×768 (projector) and 390×844 (mobile). Mobile screens may scroll vertically where the content needs it, while the modal scroll keeps its own internal scroll.
- If you replace the inline cauldron art, keep the `Cauldron` component API (`active`, `variant`, `className`) and the `640 × 620` aspect ratio, or update `.cauldron-wrap` accordingly.

---

## 7. Build, test and deploy

```bash
npm run lint
npm run build
npm start
```

The production build is a standard Next.js app. It can be deployed to:

- **Vercel** — import the repository; the defaults are correct.
- **Netlify** — use the official Next.js runtime; build command `npm run build`.

No environment variables are required.

### What has been verified

- Full five-ingredient walkthrough on desktop: unique random order, counter progression 1/5 → 5/5, final reveal, restart, and no console or page errors.
- Overlay close via `Escape`, the close button and **Back to the cauldron**, each returning focus to **Pull an ingredient**; Tab focus trap and body scroll lock.
- Layout at 1440×900, 1366×768 and 390×844, including internal scroll for long stories and mobile galleries.
- `prefers-reduced-motion` fallbacks, visible focus styles, semantic headings and live announcements.
- `npm run lint` and `npm run build` complete without errors.

### Still open

1. **Optional extra photos** — the Lightbulb, Scroll and Golden Thread scrolls currently have no gallery; add photographs later following §5 if you want them.
2. **The provisional Professional Development reflection** — confirm or replace the current wording in `src/data/ingredients.ts`.
3. **Content review** — check names, captions and notes for accuracy and tone before the presentation.
