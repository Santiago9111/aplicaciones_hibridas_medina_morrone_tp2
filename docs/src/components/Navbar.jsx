import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

 const linkStyle = { color: "#76c893", textDecoration: "none" };
  const buttonStyle = {
    background: "#76c893",
  border: "none",
  color: "#111",
  borderRadius: "5px",
  padding: "5px 10px",
  cursor: "pointer",
    fontWeight: "bold"
  };
  const logoutButtonStyle = { ...buttonStyle, background: "#c87676" };

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
      
 <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>

    <Link to="/home" style={linkStyle}>Inicio</Link>
    <Link to="/humans" style={linkStyle}>Humanos</Link>
    <Link to="/infecteds" style={linkStyle}>Infectados</Link>
        
        <span style={{ color: "#444", margin: "0 5px" }}>|</span>

      
        {user ? (
          <>
            <span style={{ color: "#fff", fontSize: "0.9rem" }}>
              Bienvenido, {user.username}
            </span>
<button onClick={handleLogout} style={logoutButtonStyle}>
 Cerrar sesión
   </button>
          </>
        ) : (
          
          <>
            <Link to="/login" style={linkStyle}>Iniciar Sesion</Link>
            <Link to="/register" style={linkStyle}>Registrarse</Link>
          </>
        )}

   </div>
  </nav>
 );
}