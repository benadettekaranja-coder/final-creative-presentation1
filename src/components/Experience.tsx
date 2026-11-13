"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Ingredient, PullPhase, ScreenName } from "@/types";
import { ingredients } from "@/data/ingredients";
import { useIngredientSequence } from "@/hooks/useIngredientSequence";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Fireflies, GardenFloor, Sprig, Stars } from "./Botanicals";
import { CauldronScene } from "./CauldronScene";
import { FinalReveal } from "./FinalReveal";
import { IntroScreen } from "./IntroScreen";
import { ScrollOverlay } from "./ScrollOverlay";

type Timeout = ReturnType<typeof setTimeout>;

export function Experience() {
  const [screen, setScreen] = useState<ScreenName>("intro");
  const [phase, setPhase] = useState<PullPhase>("idle");
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const timers = useRef<Timeout[]>([]);
  const shouldRestoreFocus = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

  const { current, discovered, total, begin, advance, reset } =
    useIngredientSequence(ingredients);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
  }, []);

  const addTimer = useCallback((callback: () => void, delay: number) => {
    timers.current.push(setTimeout(callback, delay));
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  useEffect(() => {
    if (phase === "idle" && screen === "cauldron" && shouldRestoreFocus.current) {
      shouldRestoreFocus.current = false;
      document.getElementById("pull-ingredient")?.focus({ preventScroll: true });
    }
  }, [phase, screen]);

  const enterGarden = () => {
    if (screen !== "intro" || introLeaving) return;
    setIntroLeaving(true);
    addTimer(
      () => {
        begin();
        setPhase("idle");
        setScreen("cauldron");
        setIntroLeaving(false);
      },
      reducedMotion ? 40 : 560,
    );
  };

  const pullIngredient = () => {
    if (phase !== "idle" || !current) return;

    const ingredient = current;
    setActiveIngredient(ingredient);
    setPhase("brewing");

    addTimer(() => setPhase("emerging"), reducedMotion ? 220 : 900);
    addTimer(
      () => {
        advance();
        setPhase("scroll");
        setAnnouncement(
          `${ingredient.objectName} surfaced: ${ingredient.theme}. Ingredient ${Math.min(
            discovered + 1,
            total,
          )} of ${total} discovered.`,
        );
      },
      reducedMotion ? 420 : 2050,
    );
  };

  const closeScroll = () => {
    const finished = discovered >= total;
    setPhase("idle");
    setActiveIngredient(null);

    if (finished) {
      setScreen("final");
      return;
    }

    shouldRestoreFocus.current = true;
  };

  const restart = () => {
    clearTimers();
    reset();
    setPhase("idle");
    setActiveIngredient(null);
    setIntroLeaving(false);
    setAnnouncement("");
    setScreen("intro");
  };

  return (
    <div className={`storybook storybook--${screen}`}>
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__wash" />
        <div className="atmosphere__grain" />
        <div className="corner-botanical corner-botanical--left">
          <Sprig variant="bloom" />
        </div>
        <div className="corner-botanical corner-botanical--right">
          <Sprig variant="fern" />
        </div>
        <GardenFloor />
        <Stars />
        <Fireflies dim={screen === "final"} />
      </div>

      <main className="stage">
        {screen === "intro" && (
          <IntroScreen onEnter={enterGarden} leaving={introLeaving} />
        )}

        {screen === "cauldron" && (
          <CauldronScene
            discovered={discovered}
            total={total}
            phase={phase}
            emerging={activeIngredient?.id ?? null}
            onPull={pullIngredient}
          />
        )}

        {screen === "final" && <FinalReveal onRestart={restart} />}
      </main>

      {phase === "scroll" && activeIngredient && (
        <ScrollOverlay
          ingredient={activeIngredient}
          discovered={discovered}
          total={total}
          onClose={closeScroll}
        />
      )}

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
}
