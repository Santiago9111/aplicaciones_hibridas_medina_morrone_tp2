import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.msg || "Error al registrarse");
        return;
      }

      alert("✅ Registro exitoso, ahora inicia sesión");
      navigate("/");
    } catch {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div>
      <h2>Crear cuenta</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre de usuario"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input type="email" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password" placeholder="Contraseña"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Registrarse</button>
      </form>

      <button onClick={() => navigate("/")}>
        Ya tengo cuenta
      </button>
    </div>
  );
}