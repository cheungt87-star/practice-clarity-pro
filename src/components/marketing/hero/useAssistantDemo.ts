"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  framesForScenario,
  SCENARIO_COUNT,
  type Frame,
  type TextPart,
} from "./assistant-demo-script";

export type DemoPhase = "type" | "think" | "ans";

export type DemoState = {
  scenario: number;
  phase: DemoPhase;
  frame: number;
  stage: number;
};

export type AssistantDemoView = {
  scenario: number;
  phase: DemoPhase;
  stage: number;
  typing: boolean;
  parts: TextPart[];
  popup: Frame["popup"];
  userParts: TextPart[];
  reducedMotion: boolean;
  jumpTo: (scenario: number) => void;
  nextQuestion: () => void;
  setPaused: (paused: boolean) => void;
  setCardVisible: (visible: boolean) => void;
};

const TICK_MS = 55;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

const staticStart: DemoState = { scenario: 0, phase: "ans", frame: 0, stage: 1 };

export function useAssistantDemo(): AssistantDemoView {
  const [state, setState] = useState<DemoState>(staticStart);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const pausedRef = useRef(false);
  const visibleRef = useRef(true);
  const waitRef = useRef(0);
  const stateRef = useRef(state);
  stateRef.current = state;

  const setPaused = useCallback((paused: boolean) => {
    pausedRef.current = paused;
  }, []);

  const setCardVisible = useCallback((visible: boolean) => {
    visibleRef.current = visible;
  }, []);

  const jumpTo = useCallback((scenario: number) => {
    const still = prefersReducedMotion();
    waitRef.current = 0;
    setState({
      scenario,
      phase: still ? "ans" : "type",
      frame: 0,
      stage: still ? 1 : 0,
    });
  }, []);

  const nextQuestion = useCallback(() => {
    const still = prefersReducedMotion();
    const next = (stateRef.current.scenario + 1) % SCENARIO_COUNT;
    waitRef.current = 0;
    setState({
      scenario: next,
      phase: still ? "ans" : "type",
      frame: 0,
      stage: still ? 1 : 0,
    });
  }, []);

  useEffect(() => {
    const still = prefersReducedMotion();
    setReducedMotion(still);
    setHydrated(true);
    if (still) {
      setState(staticStart);
      return;
    }
    waitRef.current = 0;
    setState({ scenario: 0, phase: "type", frame: 0, stage: 0 });
  }, []);

  useEffect(() => {
    if (!hydrated || reducedMotion) return;

    const id = window.setInterval(() => {
      if (pausedRef.current || !visibleRef.current) return;

      setState((prev) => {
        const fr = framesForScenario(prev.scenario);
        let { scenario, phase, frame, stage } = prev;
        let w = waitRef.current + 1;

        if (phase === "type") {
          if (frame < fr.length - 1) {
            frame += 1;
            w = 0;
          } else if (w >= 7) {
            phase = "think";
            w = 0;
          }
        } else if (phase === "think") {
          if (w >= 20) {
            phase = "ans";
            stage = 0;
            w = 0;
          }
        } else if (stage === 0) {
          if (w >= 16) {
            stage = 1;
            w = 0;
          }
        } else if (w >= 90) {
          scenario = (scenario + 1) % SCENARIO_COUNT;
          phase = "type";
          frame = 0;
          stage = 0;
          w = 0;
        }

        waitRef.current = w;
        if (
          scenario === prev.scenario &&
          phase === prev.phase &&
          frame === prev.frame &&
          stage === prev.stage
        ) {
          return prev;
        }
        return { scenario, phase, frame, stage };
      });
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, [hydrated, reducedMotion]);

  const typing = state.phase === "type";
  const fr = framesForScenario(state.scenario);
  const frame = fr[Math.min(state.frame, fr.length - 1)];
  const last = fr[fr.length - 1];

  return {
    scenario: state.scenario,
    phase: state.phase,
    stage: state.stage,
    typing,
    parts: typing ? frame.parts : [],
    popup: typing ? frame.popup : null,
    userParts: last.parts,
    reducedMotion,
    jumpTo,
    nextQuestion,
    setPaused,
    setCardVisible,
  };
}
