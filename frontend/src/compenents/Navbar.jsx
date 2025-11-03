import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{
      background: "#2a2a2a",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#76c893"
    }}>
      <h3>The Last of Us API</h3>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/characters" style={{ color: "#76c893", textDecoration: "none" }}>🧍 Personajes</Link>
        <Link to="/locations" style={{ color: "#76c893", textDecoration: "none" }}>🌍 Localizaciones</Link>
        <button onClick={handleLogout} style={{
          background: "#76c893",
          border: "none",
          color: "#111",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer"
        }}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}