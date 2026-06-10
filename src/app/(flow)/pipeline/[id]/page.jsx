import Link from "next/link";
import { pipelines, pipelineLogs } from "@/lib/mockData";
import styles from "@/styles/pages.module.css";

export default async function PipelinePage({ params }) {
  const { id } = await params;

  // Find the exact pipeline to get branch, time, and trigger info
  const pipeline = pipelines.find((p) => p.id === id);
  const logs = pipelineLogs[id] || "No logs available for this pipeline.";

  if (!pipeline) {
    return <div className={styles.container}>Pipeline not found.</div>;
  }

  return (
    <div className={styles.container}>
      <Link
        href={`/repo/${pipeline.repoId}`}
        style={{ color: "#888", textDecoration: "none" }}
      >
        ← Back to Repository
      </Link>

      <h2>Pipeline #{pipeline.id}</h2>

      {/* Detailed Info Card */}
      <div
        className={styles.card}
        style={{ backgroundColor: "#1e1e2e", border: "1px solid #313244" }}
      >
        <p>
          <strong>Status:</strong>{" "}
          {pipeline.status === "Failed" ? "❌ Failed" : "✅ Success"}
        </p>
        <p>
          <strong>Branch:</strong> {pipeline.branch}
        </p>
        <p>
          <strong>Triggered by:</strong> {pipeline.triggeredBy}
        </p>
        <p>
          <strong>Created:</strong> {pipeline.time}
        </p>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h3>Logs</h3>
        <div className={styles.logBox}>{logs}</div>
      </div>

      {/* The Analyze button stays, to preserve our flow for the next steps! */}
      <div style={{ marginTop: "1rem" }}>
        <Link href={`/analysis/${id}`} className={styles.primaryButton}>
          Analyze Failure
        </Link>
      </div>
    </div>
  );
}
