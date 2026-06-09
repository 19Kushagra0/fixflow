import Link from "next/link";
import { pipelines, repositories } from "@/lib/mockData";
import styles from "@/styles/pages.module.css";

// The [id] folder name tells Next.js to pass the URL param dynamically
export default async function RepositoryPage({ params }) {
  // Await params in Next.js 15+
  const { id } = await params;

  const repo = repositories.find((r) => r.id === id);
  const repoPipelines = pipelines.filter((p) => p.repoId === id);

  return (
    <div className={styles.container}>
      {/* Breadcrumb back navigation */}
      <Link href="/dashboard">← Back to Dashboard</Link>

      <h2>Repository: {repo?.name || "Unknown"}</h2>
      <h3>Failed Pipelines</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {repoPipelines.map((pipeline) => (
          <Link
            href={`/pipeline/${pipeline.id}`}
            key={pipeline.id}
            className={styles.card}
          >
            <h4>Pipeline #{pipeline.id}</h4>
            <p>
              Branch: {pipeline.branch} | Status: 🔴 {pipeline.status} |{" "}
              {pipeline.time}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
