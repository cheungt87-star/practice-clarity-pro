import styles from "./hero-card.module.css";
import { FOOT, LABELS, LONG, PH, THINK, type PopupData, type TextPart } from "./assistant-demo-script";
import { initials } from "./assistant-demo-script";
import { AnswerBody } from "./AnswerBody";
import { answerShowsCopy, copyPolicyAnswer } from "./answer-helpers";
import { SendIcon, SparkIcon } from "./SparkIcon";

export function ChatHeader({ onNewQuestion }: { onNewQuestion?: () => void }) {
  return (
    <div className={styles.chH}>
      <span className={styles.chIc}>
        <SparkIcon size={22} />
      </span>
      <div className={styles.chT}>
        SuperGP assistant<span className={styles.ai}>AI</span>
      </div>
      <button
        type="button"
        className={styles.newq}
        aria-label="Show another example question"
        onClick={onNewQuestion}
      >
        New question
      </button>
    </div>
  );
}

export function EmptyState({
  onChip,
  animate,
}: {
  onChip?: (i: number) => void;
  animate?: boolean;
}) {
  return (
    <div className={`${styles.empty}${animate ? ` ${styles.fade}` : ""}`}>
      <span className={styles.disc}>
        <SparkIcon size={26} />
      </span>
      <div className={styles.welcome}>Welcome back</div>
      <div className={styles.try}>Try asking</div>
      <div className={styles.chips}>
        {LONG.map((t, i) => (
          <button key={t} type="button" className={styles.chip} onClick={() => onChip?.(i)}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

export function MentionPopup({ popup }: { popup: PopupData }) {
  return (
    <div className={styles.pop}>
      <div className={`${styles.sec} ${styles.popHead}`}>{popup.head}</div>
      {popup.rows.map((r, i) => {
        const status =
          r.st === "Free" ? (
            <span className={styles.freeStatus}>Free</span>
          ) : (
            <span className={`${styles.chipx} ${r.st === "Assigned" ? styles.gr : styles.am}`}>
              {r.st}
            </span>
          );
        return (
          <div key={r.n} className={`${styles.pr}${i === 0 ? ` ${styles.prFirst}` : ""}`}>
            <span className={styles.pa}>{initials(r.n)}</span>
            <div className={styles.personMeta}>
              <div className={styles.personName}>{r.n}</div>
              <div className={styles.personRole}>{r.r}</div>
            </div>
            {status}
          </div>
        );
      })}
      <div className={styles.popHint}>↑↓ move · Tab or Enter insert · Esc close</div>
    </div>
  );
}

export function Composer({
  scenario,
  parts,
  typing,
  popup,
}: {
  scenario: number;
  parts: TextPart[];
  typing: boolean;
  popup: PopupData | null;
}) {
  const hasText = typing && parts.length > 0;
  return (
    <div className={styles.comp}>
      {popup ? <MentionPopup popup={popup} /> : null}
      <div className={styles.box}>
        <div className={styles.inp} aria-hidden="true">
          {parts.map((p, i) => (
            <span key={i} className={p.m ? styles.m : undefined}>
              {p.v}
            </span>
          ))}
          {typing ? <span className={styles.caret} /> : null}
          {!parts.length ? <span className={styles.ph}>{PH[scenario]}</span> : null}
        </div>
        <div className={styles.cfoot}>
          <span>Enter to send · Shift+Enter new line</span>
          <span className={`${styles.send}${hasText ? ` ${styles.sendOn}` : ""}`}>
            <SendIcon />
          </span>
        </div>
      </div>
      <div className={styles.foot}>{FOOT[scenario]}</div>
    </div>
  );
}

export function UserBubble({ parts, animate }: { parts: TextPart[]; animate?: boolean }) {
  return (
    <div className={`${styles.u}${animate ? ` ${styles.fade}` : ""}`}>
      <div className={styles.ub}>
        {parts.map((p, i) => (
          <span key={`${i}-${p.v}`} className={p.m ? styles.um : undefined}>
            {p.v}
          </span>
        ))}
      </div>
      <div className={styles.meta}>You · 09:41</div>
    </div>
  );
}

export function ThinkBubble({ scenario, animate }: { scenario: number; animate?: boolean }) {
  return (
    <div className={`${styles.a}${animate ? ` ${styles.fade}` : ""}`}>
      <span className={styles.av}>
        <SparkIcon size={14} />
      </span>
      <div className={`${styles.ab} ${styles.think}`}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{THINK[scenario]}</span>
      </div>
    </div>
  );
}

export function AnswerBubble({
  scenario,
  stage,
  animate,
}: {
  scenario: number;
  stage: number;
  animate?: boolean;
}) {
  const showCopy = answerShowsCopy(scenario, stage);
  return (
    <div className={`${styles.a}${animate ? ` ${styles.fade}` : ""}`}>
      <span className={styles.av}>
        <SparkIcon size={14} />
      </span>
      <div className={styles.ansCol}>
        <div className={styles.ab} key={`${scenario}:${stage}`}>
          <AnswerBody scenario={scenario} stage={stage} />
        </div>
        <div className={`${styles.meta} ${styles.metaRow}`}>
          <span>
            {LABELS[scenario]} · 09:41
          </span>
          {showCopy ? (
            <button
              type="button"
              className={`${styles.link} ${styles.copyLink}`}
              onClick={() => copyPolicyAnswer()}
            >
              Copy
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
