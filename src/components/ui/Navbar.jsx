import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div style={{ fontWeight: 700 }}>Daktari</div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
        {user ? (
          <>
            <span className="muted">Signed in as {user.name}</span>
            <button className="btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <a href="/login" className="btn">Sign in</a>
        )}
      </div>
    </header>
  );
}
