import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import DoctorsDashboard from "./pages/doctor/DoctorsDashboard";
import ReceptionDashboard from "./pages/receptionist/ReceptionDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/doctor/dashboard" element={
            <ProtectedRoute>
              <DoctorsDashboard />
            </ProtectedRoute>
          } />

          <Route path="/reception/dashboard" element={
            <ProtectedRoute>
              <ReceptionDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
