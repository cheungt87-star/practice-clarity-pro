import styles from "./screens.module.css";

type NavKey = "home" | "directory" | "rota" | "tasks" | "policy" | "admin" | "profile";

type AppChromeProps = {
  active: NavKey;
  children: React.ReactNode;
  /** When true, children replace the default amain padding wrapper (e.g. Ask chat). */
  bareMain?: boolean;
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const NAV: { key: NavKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "home",
    label: "Home",
    icon: (
      <Icon>
        <path d="M4 11l8-7 8 7v9H4z" />
      </Icon>
    ),
  },
  {
    key: "directory",
    label: "Directory",
    icon: (
      <Icon>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19c0-3 3-5 6-5s6 2 6 5M16 6a3 3 0 010 6M18 14c2 .6 3 2.2 3 5" />
      </Icon>
    ),
  },
  {
    key: "rota",
    label: "Smart Rota",
    icon: (
      <Icon>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M9 3v4M15 3v4" />
      </Icon>
    ),
  },
  {
    key: "tasks",
    label: "Tasks",
    icon: (
      <Icon>
        <path d="M5 6h2M5 12h2M5 18h2M10 6h9M10 12h9M10 18h9" />
      </Icon>
    ),
  },
  {
    key: "policy",
    label: "Policy GPT",
    icon: (
      <Icon>
        <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
      </Icon>
    ),
  },
  {
    key: "admin",
    label: "Admin",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </Icon>
    ),
  },
];

export function AppChrome({ active, children, bareMain }: AppChromeProps) {
  return (
    <div className={styles.appwin}>
      <div className={styles.arail}>
        {NAV.map((item) => (
          <div key={item.key} className={`${styles.ri} ${active === item.key ? styles.riOn : ""}`}>
            {item.icon}
            {item.label}
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div className={`${styles.ri} ${active === "profile" ? styles.riOn : ""}`}>
          <Icon>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
          </Icon>
          Profile
        </div>
      </div>
      {bareMain ? children : <div className={styles.amain}>{children}</div>}
    </div>
  );
}

export function AdminHeader() {
  return (
    <>
      <div className={styles.adminTitle}>Admin</div>
      <div className={styles.sub2} style={{ margin: "4px 0 10px" }}>
        Manage the people, sites, job families and policies that make up your practice.
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2, marginBottom: 12 }}>
        <span className={styles.atab}>Users</span>
        <span className={styles.atab}>Sites</span>
        <span className={styles.atab}>Job families</span>
        <span className={`${styles.atab} ${styles.atabOn}`}>Policies</span>
      </div>
    </>
  );
}

export function StatusChip({
  variant,
  children,
  small,
}: {
  variant: "live" | "pend" | "grey";
  children: React.ReactNode;
  small?: boolean;
}) {
  const variantClass =
    variant === "live" ? styles.live : variant === "pend" ? styles.pend : styles.grey;
  return (
    <span className={`${styles.chip} ${variantClass}`} style={small ? { fontSize: 10 } : undefined}>
      {children}
    </span>
  );
}
