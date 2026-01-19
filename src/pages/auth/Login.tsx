import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {
    // MVP mock login
    if(email === "admin@clinic.com"){
      login({ id:"1", role:"doctor", name:"Admin Doctor" });
      navigate("/doctor/dashboard");
    } else {
      login({ id:"2", role:"receptionist", name:"Reception User" });
      navigate("/reception/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-lg w-80 shadow">
        <h2 className="text-lg font-semibold mb-4 text-center">HMS Login</h2>
        <input className="w-full border p-2 mb-3 rounded" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full border p-2 mb-3 rounded" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;