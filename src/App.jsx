import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

/**
 * Main app shell.
 * Router lives here, AppRoutes defines the routes.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <main className="app-main">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
            }
