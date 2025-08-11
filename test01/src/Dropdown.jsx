import React from "react";

const Dropdown = ({ label, options, value, onChange}) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <label style={{ marginRight: "10px" }}>{label}:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select {label}</option>
        {options.map((opt) => {
          <option key={opt} value={opt}>
            {opt}
          </option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
