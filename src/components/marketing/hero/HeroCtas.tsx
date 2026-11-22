"use client";

import { ArrowRight } from "lucide-react";
import { useDemoDialog } from "@/components/demo-dialog-context";
import { HERO } from "@/data/landing";
import styles from "./hero-card.module.css";

export function HeroCtas() {
  const { openDemo } = useDemoDialog();

  return (
    <div className={styles.ctas}>
      <button type="button" className={styles.cta1} onClick={openDemo}>
        {HERO.primaryCta}
        <ArrowRight className={styles.cta1Icon} aria-hidden="true" />
      </button>
      <a href="#solution" className={styles.cta2}>
        {HERO.secondaryCta}
      </a>
    </div>
  );
}
