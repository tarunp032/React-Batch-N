import { useState, useEffect } from "react";

export default function useViewMode() {
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "card";
  });

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const toggleViewMode = () => {
    setViewMode(viewMode === "card" ? "table" : "card");
  };

  return { viewMode, toggleViewMode };
}
