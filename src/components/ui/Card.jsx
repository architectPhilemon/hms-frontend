import React from "react";

/**
 * Reusable Card component.
 * Accepts title, value, children for details.
 */
export default function Card({ title, value, children }) {
  return (
    <div className="card">
      <div style={{ fontSize: 12, color: "#6b7280" }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>{value}</div>
      {children && <div style={{ marginTop: 8 }}>{children}</div>}
    </div>
  );
}
