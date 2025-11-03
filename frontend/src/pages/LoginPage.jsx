import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.msg || "Error al iniciar sesión");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/characters");
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Contraseña"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Ingresar</button>
      </form>

      <button onClick={() => navigate("/register")}>
        Crear cuenta
      </button>
    </div>
  );
}
