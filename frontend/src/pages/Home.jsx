import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar.jsx";
import humanosImg from "../img/humanos.jpg";
import infectadosImg from "../img/infectados.jpg";



export default function Home() {
  const { user } = useContext(AuthContext);

  return (

    <div>
      <Navbar />
<div style={{ textAlign: "center", padding: "30px" }}>

      <header style={{ marginTop: "20px" }}>
        <h1 style={{ color: "#6aec98ff", fontSize: "2.2rem" }}>
          Bienvenido {user ? user.username : "sobreviviente"} 🪖
        </h1>
        <p style={{ color: "#000000ff", marginTop: "10px" }}>
          Esta es la base de datos interactiva del universo de <b>The Last of Us</b>.
          Aquí podés gestionar humanos e infectados, explorar datos y sobrevivir un poco más al apocalipsis.
        </p>
      </header>

      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "60px",
        flexWrap: "wrap"
      }}>
        <div style={{
          background: "#2b2b2b",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)"
        }}>
          <h2>Humanos</h2>
  <img 
    src={humanosImg} 
    alt="Humanos"
    style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
  />
  <p style={{ fontSize: "0.9rem", color: "#fafafaff" }}>
    Consulta, edita o elimina todos los humanos de la saga.
  </p>
          <Link
            to="/humans"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#6aec98ff",
              color: "#111",
              textDecoration: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              fontWeight: "bold"
            }}
          >
            Ver humanos
          </Link>
        </div>

        <div style={{
          background: "#2b2b2b",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)"
        }}>
          <h2>Infectados</h2>
          <img 
    src={infectadosImg} 
    alt="Infectados"
    style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
  />
          <p style={{ fontSize: "0.9rem", color: "#fafafaff" }}>
            Consulta, edita o elimina todos los infectados de la saga.
          </p>
          <Link
            to="/infecteds"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#6aec98ff",
              color: "#111",
              textDecoration: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              fontWeight: "bold"
            }}
          >
            Ver infectados
          </Link>
        </div>
      </section>
</div>
      <footer style={{
        marginTop: "80px",
        color: "#ffffffff",
        fontSize: "0.85rem",
         background: "#000",
          padding: "15px 0",
          width: "100%", 
     textAlign: "center"
      }}>
        <p>© 2025 - Aplicaciones Híbridas | Desarrollado por Santiago Medina & Tomás Morrone</p>
      </footer>
    </div>
  );
}