import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { fetchPatients, fetchAppointments } from "../api";
import formatDate from "../utils/formatDate";

/**
 * Dashboard shows small stats using Card components and example data fetch.
 */
export default function Dashboard() {
  const { data: patients } = useFetch(fetchPatients, []);
  const { data: appointments } = useFetch(fetchAppointments, []);

  const todayAppointments = (appointments || []).filter((a) => {
    const d = new Date(a.time);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  });

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <div className="muted">Updated: {formatDate(new Date())}</div>
      </div>

      <div className="cards-grid" style={{ marginBottom: 16 }}>
        <Card title="Total Patients" value={(patients || []).length} />
        <Card title="Appointments Today" value={todayAppointments.length} />
        <Card title="Upcoming Appointments" value={(appointments || []).length} />
      </div>

      <div className="card" style={{ marginTop: 8 }}>
        <h3>Recent appointments</h3>
        <ul>
          {(appointments || []).map((a) => (
            <li key={a.id}>
              <strong>{a.patientName}</strong> — {formatDate(a.time)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
