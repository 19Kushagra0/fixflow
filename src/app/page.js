import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export default function LoginPage() {
  return (
    <div className={styles.loginWrapper}>
      <h1>Welcome to FixFlow</h1>
      <p>AI DevOps Agent for GitLab</p>

      {/* We use Next.js <Link> instead of <a> for instant, no-refresh navigation */}
      <Link href="/dashboard" className={styles.primaryButton}>
        Sign in with GitLab
      </Link>
    </div>
  );
}
