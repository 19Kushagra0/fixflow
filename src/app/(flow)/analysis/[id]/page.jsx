"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { mockAnalyses } from "@/lib/mockData";

// Import BOTH CSS Modules
import pageStyles from "@/styles/pages.module.css";
import analysisStyles from "@/styles/analysis.module.css";

export default function AnalysisPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("idle");

  const analysis = mockAnalyses[id];

  const handleStartAnalysis = () => {
    setStatus("analyzing");
    setTimeout(() => {
      setStatus("complete");
    }, 2500);
  };

  return (
    // We use pageStyles for the layout wrapper
    <div className={pageStyles.container}>
      <Link
        href={`/pipeline/${id}`}
        style={{ color: "#888", textDecoration: "none" }}
      >
        ← Back to Pipeline
      </Link>

      <h2>Analysis for Pipeline #{id}</h2>

      {/* STATE 1: Idle */}
      {status === "idle" && (
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <p style={{ color: "#888", marginBottom: "2rem" }}>
            Ready to investigate the logs using AI.
          </p>
          {/* We use pageStyles for the generic button */}
          <button
            className={pageStyles.primaryButton}
            onClick={handleStartAnalysis}
          >
            Start Analysis
          </button>
        </div>
      )}

      {/* STATE 2: Analyzing (Loading state) */}
      {status === "analyzing" && (
        // We use analysisStyles for specific loading animation
        <div className={analysisStyles.loadingContainer}>
          <h3>🤖 Agent investigating pipeline logs...</h3>
          <p>Reading errors and finding root cause</p>
        </div>
      )}

      {/* STATE 3: Complete (Showing the results) */}
      {status === "complete" && analysis && (
        // We use analysisStyles for everything inside the AI Card
        <div className={analysisStyles.analysisCard}>
          <h3
            style={{
              margin: "0 0 1.5rem 0",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ✨ AI Analysis Complete
          </h3>

          <div className={analysisStyles.analysisSection}>
            <h4>Root Cause</h4>
            <p>{analysis.rootCause}</p>
          </div>

          <div className={analysisStyles.analysisSection}>
            <h4>Impact</h4>
            <p>{analysis.impact}</p>
          </div>

          <div className={analysisStyles.analysisSection}>
            <h4>Severity</h4>
            <span
              className={
                analysis.severity === "High"
                  ? analysisStyles.severityHigh
                  : analysisStyles.severityMedium
              }
            >
              {analysis.severity}
            </span>
          </div>
        </div>
      )}

      {/* Error state if no mock data exists */}
      {status === "complete" && !analysis && (
        <div className={analysisStyles.analysisCard}>
          <p>No mock analysis data found for this pipeline ID.</p>
        </div>
      )}
    </div>
  );
}
