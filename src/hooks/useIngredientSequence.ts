"use client";

import { useCallback, useState } from "react";

function shuffle<T>(items: readonly T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Builds one shuffled queue per presentation session, then walks it once.
 * The queue is created when the visitor enters the garden, so the server
 * and the first client render always agree on what is displayed.
 */
export function useIngredientSequence<T>(items: readonly T[]) {
  const [queue, setQueue] = useState<T[]>([]);
  const [discovered, setDiscovered] = useState(0);

  const begin = useCallback(() => {
    setQueue(shuffle(items));
    setDiscovered(0);
  }, [items]);

  const reset = useCallback(() => {
    setQueue([]);
    setDiscovered(0);
  }, []);

  const advance = useCallback(() => {
    setDiscovered((count) => Math.min(count + 1, items.length));
  }, [items.length]);

  const current: T | null = queue[discovered] ?? null;
  const total = items.length;
  const complete = queue.length > 0 && discovered >= queue.length;

  return { current, discovered, total, complete, begin, advance, reset };
}
