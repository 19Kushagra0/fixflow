import Link from "next/link";
import styles from "@/styles/pages.module.css";

export default async function AnalysisPage({ params }) {
  const { id } = await params;

  return (
    <div
      className={styles.container}
      style={{ textAlign: "center", padding: "3rem 0" }}
    >
      <Link
        href={`/pipeline/${id}`}
        style={{ display: "block", textAlign: "left" }}
      >
        ← Back to Pipeline
      </Link>

      <div style={{ marginTop: "3rem" }}>
        <h2>Analysis for Pipeline #{id}</h2>
        <p style={{ color: "#666", margin: "1rem 0 2rem" }}>No analysis yet.</p>

        {/* Currently this button does nothing as per Step 1 rules */}
        <button className={styles.primaryButton}>Start Analysis</button>
      </div>
    </div>
  );
}
