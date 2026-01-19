import React from "react";
import useFetch from "../hooks/useFetch";
import { fetchAppointments } from "../api";
import formatDate from "../utils/formatDate";

/**
 * Appointments page placeholder.
 */
export default function Appointments() {
  const { data: appointments, loading } = useFetch(fetchAppointments, []);

  return (
    <div>
      <div className="page-header">
        <h1>Appointments</h1>
        <div className="muted">{loading ? "Loading..." : `${(appointments || []).length} appointments`}</div>
      </div>

      <div className="card">
        <ul>
          {(appointments || []).map((a) => (
            <li key={a.id} style={{ marginBottom: 8 }}>
              <strong>{a.patientName}</strong> — {formatDate(a.time)} <span className="muted">({a.reason})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
