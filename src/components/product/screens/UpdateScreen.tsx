import { AdminHeader, AppChrome, StatusChip } from "./AppChrome";
import styles from "./screens.module.css";

function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"
        stroke="#b3261e"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UpdateScreen() {
  return (
    <AppChrome active="admin">
      <AdminHeader />
      <div
        className={styles.card2}
        style={{
          marginBottom: 10,
          border: "1.5px solid var(--ink)",
          boxShadow: "var(--shadow-soft)",
          background: "#fff",
        }}
      >
        <b style={{ fontSize: 13 }}>Upload policies</b>
        <div className={styles.drow}>
          <span>Annual leave policy v2.docx</span>
          <StatusChip variant="live">Added</StatusChip>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 6 }}>
          Is this file new, or does it replace an existing policy?
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <div
            style={{
              flex: 1,
              border: "1px solid var(--hairline)",
              borderRadius: 8,
              padding: "8px 10px",
              fontSize: 11,
            }}
          >
            ○ A new policy
          </div>
          <div
            style={{
              flex: 1,
              border: "1.5px solid var(--coral)",
              background: "#fff8f5",
              borderRadius: 8,
              padding: "8px 10px",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            ● Replaces an existing policy
          </div>
        </div>
        <div
          style={{
            border: "1px solid var(--hairline)",
            borderRadius: 8,
            padding: "8px 10px",
            fontSize: 11,
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Annual Leave Policy (v1)</span>
          <span aria-hidden>▾</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 600 }}>Cancel</span>
          <span className={styles.cbtn}>Upload</span>
        </div>
      </div>
      <div className={styles.card2} style={{ borderBottom: "none", borderRadius: "10px 10px 0 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <b style={{ fontSize: 13 }}>Policy library</b>
          <span className={styles.sub2}>12 documents</span>
        </div>
        <div className={styles.thead}>
          <span>TITLE</span>
          <span>STATUS</span>
          <span>VERSION</span>
          <span>UPLOADED</span>
          <span />
        </div>
        <div className={`${styles.trow} ${styles.highlight}`}>
          <span>
            <b>Annual Leave Policy</b>
            <br />
            <span className={styles.sub2}>Annual leave policy v2.docx · replaces v1</span>
          </span>
          <StatusChip variant="live">Ready</StatusChip>
          <span>
            <b>v2</b>
          </span>
          <span>22 Nov 2026</span>
          <span>
            <TrashIcon />
          </span>
        </div>
        <div className={`${styles.trow} ${styles.mutedRow}`}>
          <span>
            <b>Annual Leave Policy</b>
            <br />
            <span className={styles.sub2}>Read-only history · not used for answers</span>
          </span>
          <StatusChip variant="grey">History</StatusChip>
          <span>v1</span>
          <span>18 Nov 2026</span>
          <span>
            <TrashIcon />
          </span>
        </div>
        <div className={styles.trow}>
          <span>
            <b>Accident Reporting Policy</b>
            <br />
            <span className={styles.sub2}>Accident reporting policy.docx</span>
          </span>
          <StatusChip variant="live">Ready</StatusChip>
          <span>v1</span>
          <span>18 Nov 2026</span>
          <span>
            <TrashIcon />
          </span>
        </div>
      </div>
    </AppChrome>
  );
}
