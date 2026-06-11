import Link from "next/link";
import { pipelines, pipelineLogs } from "@/lib/mockData";
import styles from "@/styles/pages.module.css";
import LogViewer from "@/components/LogViewer"; // Import our new component

export default async function PipelinePage({ params }) {
  const { id } = await params;

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

      {/* Here is our new interactive component! */}
      <LogViewer logs={logs} />

      {/* Kept this so our flow stays intact for Step 5! */}
      <div style={{ marginTop: "2rem" }}>
        <Link href={`/analysis/${id}`} className={styles.primaryButton}>
          Analyze Failure
        </Link>
      </div>
    </div>
  );
}
