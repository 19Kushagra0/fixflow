import Link from "next/link";
import { pipelineLogs } from "@/lib/mockData";
import styles from "@/styles/pages.module.css";

export default async function PipelinePage({ params }) {
  const { id } = await params;
  const logs = pipelineLogs[id] || "No logs available.";

  return (
    <div className={styles.container}>
      <Link href="/repo/1">← Back to Repository</Link>

      <h2>Pipeline #{id}</h2>
      <p>Status: 🔴 Failed</p>

      <div>
        <h3>Logs</h3>
        <div className={styles.logBox}>{logs}</div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Link href={`/analysis/${id}`} className={styles.primaryButton}>
          Analyze Failure
        </Link>
      </div>
    </div>
  );
}
