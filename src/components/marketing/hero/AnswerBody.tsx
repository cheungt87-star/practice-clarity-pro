import styles from "./hero-card.module.css";
import { POLICY_COPY_TEXT } from "./assistant-demo-script";
import { SpinIcon, TickIcon } from "./SparkIcon";

type AnswerBodyProps = {
  scenario: number;
  stage: number;
};

export function AnswerBody({ scenario, stage }: AnswerBodyProps) {
  if (scenario === 0) {
    return (
      <>
        <div className={styles.row}>
          {stage ? <TickIcon /> : <SpinIcon className={styles.spin} />}
          <span>Swap Sam Reid for Priya Shah, Thu 26 Nov AM</span>
        </div>
        {stage ? (
          <div className={styles.fade}>
            <div className={styles.mt10}>Done. Priya Shah now covers Thursday 26 Nov AM.</div>
            <div className={styles.doneRow}>
              <span className={styles.doneLabel}>1 instruction · 1 done</span>
              <button type="button" className={styles.ghost}>
                Undo all
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  if (scenario === 1) {
    return (
      <div>
        <b>Nothing changed.</b> Dr Amir Patel is on leave on Friday 27 Nov, so I held this back.
      </div>
    );
  }

  if (scenario === 2) {
    return (
      <>
        <div>{POLICY_COPY_TEXT}</div>
        {stage ? (
          <div className={styles.fade}>
            <div className={styles.confRow}>
              <span className={`${styles.chipx} ${styles.g}`}>High confidence</span>
              <span className={styles.confNote}>Stated directly in your policies.</span>
            </div>
            <div className={styles.sources}>
              <div className={styles.sec}>Sources</div>
              <div className={styles.sourceRow}>
                <span className={styles.sourceNum}>1.</span>
                <span>Leave policy · Section 3.2</span>
              </div>
              <button type="button" className={styles.link} style={{ marginTop: 6 }}>
                Show exact wording
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <>
      <div>2 tasks are open this week.</div>
      {stage ? (
        <div className={`${styles.fade} ${styles.taskList}`}>
          <div className={`${styles.row} ${styles.rowTight}`}>
            <span className={styles.taskName}>Fire safety check</span>
            <span>Hana</span>
            <span className={`${styles.chipx} ${styles.pk}`}>Due soon</span>
          </div>
          <div className={`${styles.row} ${styles.rowTight}`}>
            <span className={styles.taskName}>Fridge temperature log</span>
            <span>Priya</span>
            <span className={`${styles.chipx} ${styles.am}`}>Open</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
