import { AdminHeader, AppChrome, StatusChip } from "./AppChrome";
import styles from "./screens.module.css";

export function UploadScreen() {
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
          <b>0</b>
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
      <div
        className={styles.card2}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <span>
          <b style={{ fontSize: 13 }}>Upload policies</b>
          <br />
          <span className={styles.sub2}>
            Add one or many PDF or Word files. We process them so staff can ask questions.
          </span>
        </span>
        <span className={styles.cbtn}>Upload policies</span>
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
        <div className={styles.trow}>
          <span>
            <b>Annual Leave Policy</b>
            <br />
            <span className={styles.sub2}>Annual leave policy.docx</span>
          </span>
          <StatusChip variant="live">Ready</StatusChip>
          <span>v1</span>
          <span>18 Nov 2026</span>
          <span />
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
          <span />
        </div>
      </div>
    </AppChrome>
  );
}
