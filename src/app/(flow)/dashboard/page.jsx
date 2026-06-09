import Link from "next/link";
import { repositories } from "@/lib/mockData";
import styles from "@/styles/pages.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>

      <div>
        <h3>Connected Repositories</h3>
        <button
          className={styles.primaryButton}
          style={{ marginBottom: "1rem" }}
        >
          Connect Repository
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {repositories.map((repo) => (
          <Link href={`/repo/${repo.id}`} key={repo.id} className={styles.card}>
            <h4>{repo.name}</h4>
            <p>Status: {repo.status}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
