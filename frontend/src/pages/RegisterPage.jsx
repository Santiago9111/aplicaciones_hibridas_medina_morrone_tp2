import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar.jsx";

export default function RegisterPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.errors && data.errors.length > 0) {
          return setError(data.errors[0].msg);
        }
        if (data.msg) return setError(data.msg);
        throw new Error("Error desconocido al registrarse");
      }
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Error al registrarse");
    }
  };

  return (
    <>
      <Navbar />
      
    {/* Contenedor principal que ocupa el alto de pantalla */}
      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        <div className="auth-page-wrapper" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px"
        }}>
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>

        <input
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña (mínimo 6 caracteres)"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-msg">{error}</p>}

        <button type="submit">Registrarse</button>
        <p>
          ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
    </div>
    <footer style={{
        marginTop: "80px",
        color: "#ffffffff",
        fontSize: "0.85rem",
        background: "#000",
        padding: "15px 0",
        textAlign: "center"
      }}>
        <p>© 2025 - Aplicaciones Híbridas | Desarrollado por Santiago Medina & Tomás Morrone</p>
      </footer>
    </>
  );
}