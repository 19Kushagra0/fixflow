import Link from "next/link";
import { pipelines, repositories } from "@/lib/mockData";
import styles from "@/styles/pages.module.css";

export default async function RepositoryPage({ params }) {
  const { id } = await params;

  const repo = repositories.find((r) => r.id === id);
  const repoPipelines = pipelines.filter((p) => p.repoId === id);

  // Helper function to show the right emoji
  const getStatusIcon = (status) => {
    if (status === "Failed") return "❌";
    if (status === "Success") return "✅";
    if (status === "Running") return "🟡";
    return "❓";
  };

  return (
    <div className={styles.container}>
      <Link href="/dashboard" style={{ color: "#888", textDecoration: "none" }}>
        ← Back to Dashboard
      </Link>

      <h2>Repository: {repo?.name || "Unknown"}</h2>
      <h3 style={{ marginTop: "1rem" }}>Recent Pipelines</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {repoPipelines.map((pipeline) => (
          <Link
            href={`/pipeline/${pipeline.id}`}
            key={pipeline.id}
            className={styles.card}
          >
            <h4 style={{ margin: "0 0 0.5rem 0" }}>
              {getStatusIcon(pipeline.status)} Pipeline #{pipeline.id}
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#a6accd",
                fontSize: "0.9rem",
              }}
            >
              <span>
                Branch: <strong>{pipeline.branch}</strong>
              </span>
              <span>{pipeline.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
