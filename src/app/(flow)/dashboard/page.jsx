"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/pages.module.css";
import { repositories } from "@/lib/mockData";

export default function Dashboard() {
  // We start at 'disconnected'. Possible states: 'disconnected', 'authorizing', 'selecting', 'connected'
  const [flowState, setFlowState] = useState("disconnected");
  const [selectedRepo, setSelectedRepo] = useState(null);

  // --- STATE 1: Disconnected ---
  if (flowState === "disconnected") {
    return (
      <div
        className={styles.container}
        style={{ textAlign: "center", marginTop: "4rem" }}
      >
        <h2>No repository connected</h2>
        <p style={{ color: "#888", marginBottom: "2rem" }}>
          Connect your GitLab account to start monitoring deployments.
        </p>
        <button
          className={styles.primaryButton}
          onClick={() => setFlowState("authorizing")}
        >
          Connect GitLab
        </button>
      </div>
    );
  }

  // --- STATE 2: Authorizing ---
  if (flowState === "authorizing") {
    return (
      <div
        className={styles.container}
        style={{ textAlign: "center", marginTop: "4rem" }}
      >
        <h2>Connect GitLab</h2>
        <p style={{ color: "#888", marginBottom: "2rem" }}>
          FixFlow needs permission to view your repositories.
        </p>
        <button
          className={styles.primaryButton}
          onClick={() => setFlowState("selecting")}
        >
          Authorize
        </button>
      </div>
    );
  }

  // --- STATE 3: Selecting Repository ---
  if (flowState === "selecting") {
    return (
      <div className={styles.container}>
        <h2>Choose Repository</h2>
        <p style={{ color: "#888" }}>
          Select the repository you want FixFlow to monitor.
        </p>

        <div className={styles.repoList}>
          {repositories.map((repo) => (
            <button
              key={repo.id}
              className={styles.repoItem}
              onClick={() => {
                setSelectedRepo(repo);
                setFlowState("connected");
              }}
            >
              📁 {repo.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- STATE 4: Connected (Flow Restored!) ---
  if (flowState === "connected") {
    return (
      <div className={styles.container} style={{ marginTop: "2rem" }}>
        <h2>Dashboard</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h3>Connected Repository</h3>
          <button
            className={styles.secondaryButton}
            style={{ marginTop: 0 }}
            onClick={() => setFlowState("selecting")}
          >
            Change Repository
          </button>
        </div>

        {/* This is the crucial part: A Link that connects Step 2 back to Step 1 */}
        <Link
          href={`/repo/${selectedRepo.id}`}
          className={styles.card}
          style={{ borderLeft: "4px solid #10b981" }}
        >
          <h4 style={{ margin: "0 0 0.5rem 0" }}>📁 {selectedRepo.name}</h4>
          <p style={{ color: "#10b981", margin: 0, fontWeight: "bold" }}>
            Status: Connected - Click to view pipelines →
          </p>
        </Link>
      </div>
    );
  }
}
