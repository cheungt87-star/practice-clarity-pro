import { AdminHeader, AppChrome, StatusChip } from "./AppChrome";
import styles from "./screens.module.css";

export function ProcessingScreen() {
  return (
    <AppChrome active="admin">
      <AdminHeader />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
          marginBottom: 10,
        }}
      >
        <div className={styles.stat}>
          <b>12</b>
          <span>Live policies</span>
        </div>
        <div className={styles.stat}>
          <b className={styles.amberNum}>3</b>
          <span>Being processed</span>
        </div>
        <div className={styles.stat}>
          <b className={styles.fail}>0</b>
          <span>Failed - needs action</span>
        </div>
        <div className={styles.stat}>
          <b>0</b>
          <span>Review due or overdue</span>
        </div>
      </div>
      <div className={styles.card2} style={{ borderBottom: "none", borderRadius: "10px 10px 0 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <b style={{ fontSize: 13 }}>Policy library</b>
          <span className={styles.sub2}>15 documents</span>
        </div>
        <div className={styles.thead}>
          <span>TITLE</span>
          <span>STATUS</span>
          <span>VERSION</span>
          <span>UPLOADED</span>
          <span />
        </div>
        <div className={styles.trow}>
          <span>
            <b>Annual Leave Policy</b>
            <br />
            <span className={styles.sub2}>Annual leave policy.docx</span>
          </span>
          <StatusChip variant="live">Ready</StatusChip>
          <span>v1</span>
          <span>22 Nov 2026</span>
          <span />
        </div>
        <div className={styles.trow}>
          <span>
            <b>Adverse Weather Policy</b>
            <br />
            <span className={styles.sub2}>Adverse weather policy.docx · Making it searchable</span>
          </span>
          <StatusChip variant="pend">Processing</StatusChip>
          <span>v1</span>
          <span>22 Nov 2026</span>
          <span />
        </div>
        <div className={styles.trow}>
          <span>
            <b>Late Arrivals SOP</b>
            <br />
            <span className={styles.sub2}>Late arrivals SOP.pdf · In the queue</span>
          </span>
          <StatusChip variant="grey">Queued</StatusChip>
          <span>v1</span>
          <span>22 Nov 2026</span>
          <span />
        </div>
        <div className={styles.trow}>
          <span>
            <b>Accident Reporting Policy</b>
            <br />
            <span className={styles.sub2}>Accident reporting policy.docx · Reading the file</span>
          </span>
          <StatusChip variant="pend">Processing</StatusChip>
          <span>v1</span>
          <span>22 Nov 2026</span>
          <span />
        </div>
      </div>
    </AppChrome>
  );
}
