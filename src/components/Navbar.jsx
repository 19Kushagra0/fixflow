import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/dashboard" className={styles.logo}>
        FixFlow
      </Link>
      <span>Mock User Profile</span>
    </nav>
  );
}
