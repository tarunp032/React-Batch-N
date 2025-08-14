import React from "react";

export default function SortDropdown({ sortType, setSortType }) {
  return (
    <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
      <option value="">Sort by</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
    </select>
  );
}
