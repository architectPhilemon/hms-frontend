import React from "react";
import useFetch from "../hooks/useFetch";
import { fetchPatients } from "../api";
import Card from "../components/Card";

/**
 * Patients page shows a list of patients (mock).
 */
export default function Patients() {
  const { data: patients, loading } = useFetch(fetchPatients, []);

  return (
    <div>
      <div className="page-header">
        <h1>Patients</h1>
        <div className="muted">{loading ? "Loading..." : `${(patients || []).length} patients`}</div>
      </div>

      <div className="cards-grid">
        {(patients || []).map((p) => (
          <Card key={p.id} title={p.name} value={`${p.age} yrs`}>
            <div className="muted">Last visit: {p.lastVisit}</div>
          </Card>
        ))}
      </div>
    </div>
  );
    }
