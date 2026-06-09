import Link from "next/link";
import styles from "@/styles/layout.module.css";
import Navbar from "@/components/Navbar.jsx";

export default function FlowLayout({ children }) {
  return (
    <div>
      {/* Top Navigation Bar shared across all internal pages */}
      <Navbar />

      {/* The actual page content is injected into this main tag */}
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
