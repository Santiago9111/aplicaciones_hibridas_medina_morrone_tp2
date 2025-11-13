import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar.jsx";
import HumanForm from "../components/HumanForm.jsx";

export default function HumansPage() {
  const { token } = useContext(AuthContext);
  const [humans, setHumans] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchHumans = async () => {
    const res = await fetch("http://localhost:5000/api/humans", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setHumans(data);
  };

  const deleteHuman = async (id) => {
    if (!confirm("¿Eliminar personaje?")) return;
    await fetch(`http://localhost:5000/api/humans/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchHumans();
  };

  useEffect(() => { fetchHumans(); }, []);

  return (
    <div>
      <Navbar />
      <h2>Humanos</h2>

      <HumanForm
        token={token}
        selected={selected}
        onSaved={fetchHumans}
        onCancel={() => setSelected(null)}
      />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px"
      }}>
        {humans.map((hum) => (
          <div key={hum._id} style={{
            background: "#2b2b2b",
            padding: "15px",
            borderRadius: "10px",
            width: "250px"
          }}>
            <img
              src={hum.image || "https://placehold.co/250x150"}
              alt={hum.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{hum.name}</h3>
            <p>{hum.role}</p>
            <small>{hum.description}</small>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => setSelected(hum)}>Editar</button>
              <button
                style={{ background: "crimson", marginLeft: "5px" }}
                onClick={() => deleteHuman(hum._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}