/**
 * Placeholder API functions returning mock data.
 * Replace with axios/fetch calls to Supabase/Node backend.
 */

const MOCK_PATIENTS = [
  { id: "p1", name: "Asha Mwangi", age: 29, gender: "F", lastVisit: "2026-01-05" },
  { id: "p2", name: "John Otieno", age: 42, gender: "M", lastVisit: "2025-12-20" },
];

const MOCK_APPOINTMENTS = [
  { id: "a1", patientName: "Asha Mwangi", time: "2026-01-19T09:00:00Z", reason: "Checkup" },
  { id: "a2", patientName: "John Otieno", time: "2026-01-19T11:30:00Z", reason: "Follow-up" },
];

export async function fetchPatients() {
  // simulate network latency
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PATIENTS), 400);
  });
}

export async function fetchAppointments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_APPOINTMENTS), 400);
  });
}

export async function loginUser({ email, password }) {
  // VERY SIMPLE MOCK: accept any email/password
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          user: { id: "u1", name: "Clinician Demo", email },
          token: "mock-token-123",
        }),
      600
    );
  });
}

export async function createPatient(payload) {
  // placeholder - return created patient with id
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...payload, id: `p${Date.now()}` }), 300);
  });
    }
