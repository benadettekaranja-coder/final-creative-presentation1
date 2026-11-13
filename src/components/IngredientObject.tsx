import type { ComponentType } from "react";
import type { IngredientId } from "@/types";
import {
  LightbulbObject,
  MicrophoneObject,
  MirrorObject,
  ScrollObject,
  ThreadObject,
} from "./objects/IngredientArt";

const ART: Record<IngredientId, ComponentType> = {
  microphone: MicrophoneObject,
  lightbulb: LightbulbObject,
  scroll: ScrollObject,
  thread: ThreadObject,
  mirror: MirrorObject,
};

export function IngredientObject({
  id,
  className = "",
}: {
  id: IngredientId;
  className?: string;
}) {
  const Art = ART[id];

  return (
    <div
      className={`ingredient-object ingredient-object--${id}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <Art />
    </div>
  );
}
