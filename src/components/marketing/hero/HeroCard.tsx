import { HERO } from "@/data/landing";
import styles from "./hero-card.module.css";
import { HeroCardClient } from "./HeroCardClient";
import { HeroCtas } from "./HeroCtas";

export default function HeroCard() {
  return (
    <div id="top" className={styles.section}>
      <HeroCardClient>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {HERO.tag}
          </span>
          <h1 className={styles.heading}>
            {HERO.headlineLead}
            <br />
            <span className={styles.headingAccent}>{HERO.headlineAccent}</span>
          </h1>
          <p className={styles.sub}>{HERO.subheadline}</p>
          <HeroCtas />
          <div className={styles.fine}>{HERO.riskLine}</div>
        </div>
      </HeroCardClient>
    </div>
  );
}
