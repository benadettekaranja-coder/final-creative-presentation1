export type IngredientId =
  | "microphone"
  | "lightbulb"
  | "scroll"
  | "thread"
  | "mirror";

export type ScreenName = "intro" | "cauldron" | "final";

export type PullPhase = "idle" | "brewing" | "emerging" | "scroll";

export type IngredientTone =
  | "theatrical"
  | "inventive"
  | "scholarly"
  | "warm"
  | "quiet";

export type MediaSpan = "wide" | "half" | "third";
export type MediaFormat = "photo" | "document";

interface MediaBase {
  /** Optional caption shown beneath the frame. */
  caption?: string;
  /** CSS aspect-ratio for the frame, e.g. "4 / 3". */
  aspect?: string;
  /** How much of the gallery grid the item occupies. */
  span?: MediaSpan;
  /** CSS object-position for the cropped image, e.g. "center 20%". */
  focus?: string;
  /** Switches the frame styling between a photo mount and a paper scan. */
  format?: MediaFormat;
  /** Path hint shown while the real asset is missing, e.g. "public-speaking/finals.jpg". */
  suggestedFile: string;
}

/**
 * A gallery slot either has a real local asset (plus alt text) or is a
 * deliberately designed placeholder describing what will go there.
 */
export type MediaItem = MediaBase &
  (
    | { src: string; alt: string; placeholder?: string }
    | { src?: undefined; alt?: undefined; placeholder: string }
  );

export interface NotebookNote {
  label: string;
  text: string;
}

export interface Ingredient {
  id: IngredientId;
  numeral: string;
  objectName: string;
  theme: string;
  intro: string;
  reflection: string[];
  notes?: NotebookNote[];
  mediaLabel: string;
  media: MediaItem[];
  closing?: string;
  tone: IngredientTone;
}

export interface PortraitCard {
  src?: string;
  alt?: string;
  placeholder: string;
  suggestedFile: string;
  aspect: string;
}
