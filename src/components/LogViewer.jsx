"use client"; // Needs to be a client component because of buttons/state

import { useState } from 'react';
import styles from '@/styles/logviewer.module.css';

export default function LogViewer({ logs }) {
  // State for expanding/collapsing
  const [isExpanded, setIsExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  // Function to copy text to clipboard
  const handleCopy = (e) => {
    e.stopPropagation(); // Prevents the click from also collapsing the log box
    navigator.clipboard.writeText(logs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
  };

  // Function to highlight error lines
  const renderHighlightedLogs = (logText) => {
    return logText.split('\n').map((line, index) => {
      // If the line contains these words, make it red
      if (line.includes('Error') || line.includes('Module not found') || line.includes('TypeError') || line.includes('failed')) {
        return <div key={index} className={styles.errorHighlight}>{line}</div>;
      }
      // Otherwise, render normal text
      return <div key={index}>{line}</div>;
    });
  };

  return (
    <div className={styles.logContainer}>
      {/* Clickable Header */}
      <div className={styles.logHeader} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.logTitle}>
          {isExpanded ? '▼' : '▶'} Logs
        </div>
        
        {/* Copy Button */}
        <button className={styles.copyButton} onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy Logs'}
        </button>
      </div>

      {/* Scrollable Log Content */}
      {isExpanded && (
        <div className={styles.logContent}>
          {renderHighlightedLogs(logs)}
        </div>
      )}
    </div>
  );
}