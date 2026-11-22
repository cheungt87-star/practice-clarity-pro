"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import styles from "./hero-card.module.css";
import AssistantDemoStatic from "./AssistantDemoStatic";

const AssistantDemo = dynamic(() => import("./AssistantDemo"), {
  ssr: false,
  loading: () => (
    <div className={styles.chatwrap}>
      <div className={`${styles.backing} ${styles.backingLilac}`} aria-hidden="true" />
      <div className={`${styles.backing} ${styles.backingButter}`} aria-hidden="true" />
      <AssistantDemoStatic />
    </div>
  ),
});

export function HeroCardClient({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={cardRef}
      className={styles.card}
      id="hero-card"
      aria-label="SuperGP"
    >
      {/* Copy first for tab order (CTAs before chat controls). */}
      {children}
      <AssistantDemo cardRef={cardRef} />
    </section>
  );
}
