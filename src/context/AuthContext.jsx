import React, { createContext, useState, useEffect, useContext } from "react";
import * as api from "../api";

/**
 * Simple AuthContext with mock login/logout.
 * Replace api.loginUser with real backend call.
 */

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("daktari_user")) || null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("daktari_user", JSON.stringify(user));
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.loginUser({ email, password }); // mock
      setUser(res.user);
      setLoading(false);
      return res;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("daktari_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
      }
