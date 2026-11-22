import styles from "./hero-card.module.css";
import { framesForScenario } from "./assistant-demo-script";
import { AnswerBubble, ChatHeader, Composer, UserBubble } from "./ChatChrome";

/** SSR / no-JS / loading fallback: finished scenario 0 answer. */
export default function AssistantDemoStatic() {
  const parts = framesForScenario(0)[framesForScenario(0).length - 1].parts;

  return (
    <div
      className={styles.chat}
      role="group"
      aria-label="Example SuperGP assistant conversation"
    >
      <ChatHeader />
      <div className={styles.log} aria-live="polite">
        <UserBubble parts={parts} />
        <AnswerBubble scenario={0} stage={1} />
      </div>
      <Composer scenario={0} parts={[]} typing={false} popup={null} />
    </div>
  );
}
