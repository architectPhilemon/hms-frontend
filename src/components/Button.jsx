import React from "react";

/**
 * Lightweight button wrapper for consistent styling.
 */
export default function Button({ children, onClick, variant = "primary", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant === "secondary" ? "secondary" : ""}`}
    >
      {children}
    </button>
  );
}
