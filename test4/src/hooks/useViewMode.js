import { useState, useEffect } from "react";

export default function useViewMode() {
  // Initial state from localStorage or default "card"
  const [viewMode, setViewMode] = useState(() => {
    try {
      const saved = localStorage.getItem("viewMode");
      return saved ? saved : "card";
    } catch {
      return "card"; // fallback (in case localStorage not available)
    }
  });

  // Sync to localStorage whenever viewMode changes
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  // Toggle function
  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "card" ? "table" : "card"));
  };

  return { viewMode, toggleViewMode };
}
