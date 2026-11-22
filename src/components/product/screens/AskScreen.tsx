import { AppChrome, StatusChip } from "./AppChrome";
import styles from "./screens.module.css";

function Spark() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </svg>
  );
}

export function AskScreen() {
  return (
    <AppChrome active="policy" bareMain>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            padding: "12px 16px",
            borderBottom: "1px solid var(--hairline)",
          }}
        >
          <b style={{ fontSize: 14 }}>Policy GPT</b>
          <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <StatusChip variant="live" small>
              ● 12 policies live
            </StatusChip>
            <span
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: 999,
                padding: "4px 10px",
                fontSize: 10,
                fontWeight: 600,
                whiteSpace: "nowrap",
                background: "#fff",
              }}
            >
              + New question
            </span>
          </span>
        </div>

        <div style={{ flex: 1, padding: 16, overflow: "hidden" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <div className={styles.bubU}>How much notice do I need for annual leave?</div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <div className={styles.av}>
                <Spark />
              </div>
              <div className={styles.bubA}>
                <div style={{ marginBottom: 8 }}>
                  Sample answer: ask at least four weeks ahead for a two-week break, and your manager
                  confirms it in writing.
                </div>
                <div style={{ marginBottom: 8 }}>
                  <StatusChip variant="live" small>
                    High confidence
                  </StatusChip>
                </div>
                <div className={styles.src}>
                  Sources: 1. Annual Leave Policy · Requests for leave
                  <br />
                  <span style={{ fontWeight: 600, textDecoration: "underline" }}>
                    Show exact wording
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <div className={styles.bubU}>A patient is 12 minutes late. What do I do?</div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <div className={styles.av}>
                <Spark />
              </div>
              <div className={styles.bubA}>
                <div style={{ marginBottom: 8 }}>
                  Sample answer: the patient may be seen if there is room in the session. If not, offer
                  the next free slot and note it on the record.
                </div>
                <div style={{ marginBottom: 8 }}>
                  <StatusChip variant="pend" small>
                    Medium confidence
                  </StatusChip>
                </div>
                <div className={styles.src}>
                  Sources: 1. Appointment Punctuality Policy · Late arrivals
                  <br />
                  <span style={{ fontWeight: 600, textDecoration: "underline" }}>
                    Show exact wording
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <div className={styles.bubU}>What is our policy on staff parking permits?</div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <div className={styles.av}>
                <Spark />
              </div>
              <div className={styles.bubA}>
                I can’t find this in your uploaded policies, so I won’t guess. Try asking your practice
                manager, or ask an admin to upload the policy.
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 16px 14px" }}>
          <div
            style={{
              border: "1.5px solid var(--ink)",
              borderRadius: 16,
              padding: "10px 12px 8px",
              background: "#fff",
            }}
          >
            <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>
              Got a question about our policies? Ask away!
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 14,
              }}
            >
              <span style={{ fontSize: 10, color: "var(--ink-muted)" }}>
                Enter to send · Shift+Enter new line
              </span>
              <span className={styles.av}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppChrome>
  );
}
