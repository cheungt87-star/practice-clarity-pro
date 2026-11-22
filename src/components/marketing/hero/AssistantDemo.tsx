"use client";

import { useEffect, useRef } from "react";
import styles from "./hero-card.module.css";
import { TINTS } from "./assistant-demo-script";
import { useAssistantDemo } from "./useAssistantDemo";
import {
  AnswerBubble,
  ChatHeader,
  Composer,
  EmptyState,
  ThinkBubble,
  UserBubble,
} from "./ChatChrome";

type AssistantDemoProps = {
  cardRef: React.RefObject<HTMLElement | null>;
};

export default function AssistantDemo({ cardRef }: AssistantDemoProps) {
  const demo = useAssistantDemo();
  const chatRef = useRef<HTMLDivElement>(null);
  const { setCardVisible } = demo;

  useEffect(() => {
    const card = cardRef.current;
    let intersecting = true;
    const sync = () => setCardVisible(intersecting && !document.hidden);

    let io: IntersectionObserver | undefined;
    if (card && "IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        intersecting = entries[0]?.isIntersecting ?? false;
        sync();
      });
      io.observe(card);
    }
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      io?.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [cardRef, setCardVisible]);

  const ariaLive = demo.phase === "ans" && demo.stage === 1 ? "polite" : "off";

  return (
    <>
      {TINTS.map((bg, i) => (
        <div
          key={bg}
          className={`${styles.tint}${i === demo.scenario ? ` ${styles.tintOn}` : ""}`}
          style={{ background: bg }}
          aria-hidden="true"
        />
      ))}
      <div className={styles.chatwrap}>
        <div
          ref={chatRef}
          className={styles.chat}
          role="group"
          aria-label="Example SuperGP assistant conversation"
          onMouseEnter={() => demo.setPaused(true)}
          onMouseLeave={() => demo.setPaused(false)}
          onFocusCapture={() => demo.setPaused(true)}
          onBlurCapture={(e) => {
            if (!chatRef.current?.contains(e.relatedTarget as Node | null)) {
              demo.setPaused(false);
            }
          }}
        >
          <ChatHeader onNewQuestion={demo.nextQuestion} />
          <div className={styles.log} aria-live={ariaLive}>
            {demo.typing ? <EmptyState onChip={demo.jumpTo} animate /> : null}
            {!demo.typing ? <UserBubble parts={demo.userParts} animate /> : null}
            {demo.phase === "think" ? <ThinkBubble scenario={demo.scenario} animate /> : null}
            {demo.phase === "ans" ? (
              <AnswerBubble scenario={demo.scenario} stage={demo.stage} animate />
            ) : null}
          </div>
          <Composer
            scenario={demo.scenario}
            parts={demo.parts}
            typing={demo.typing}
            popup={demo.popup}
          />
        </div>
      </div>
    </>
  );
}
