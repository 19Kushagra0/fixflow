import Link from "next/link";
import styles from "@/styles/layout.module.css";

export default function FlowLayout({ children }) {
  return (
    <div>
      {/* Top Navigation Bar shared across all internal pages */}
      <nav className={styles.navbar}>
        <Link href="/dashboard" className={styles.logo}>
          FixFlow
        </Link>
        <span>Mock User Profile</span>
      </nav>

      {/* The actual page content is injected into this main tag */}
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
