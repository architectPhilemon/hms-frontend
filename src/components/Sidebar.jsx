import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Minimal collapsible sidebar can be extended later.
 */
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/dashboard" end>Dashboard</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
    </aside>
  );
}
