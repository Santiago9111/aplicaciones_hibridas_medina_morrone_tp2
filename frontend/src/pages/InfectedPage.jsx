import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar.jsx";
import LocationForm from "../components/LocationForm.jsx";

export default function LocationsPage() {
  const { token } = useContext(AuthContext);
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchLocations = async () => {
    const res = await fetch("http://localhost:5000/api/locations", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setLocations(data);
  };

  const deleteLocation = async (id) => {
    if (!confirm("¿Eliminar localización?")) return;
    await fetch(`http://localhost:5000/api/locations/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchLocations();
  };

  useEffect(() => { fetchLocations(); }, []);

  return (
    <div>
      <Navbar />
      <h2>🌍 Localizaciones</h2>

      <LocationForm
        token={token}
        selected={selected}
        onSaved={fetchLocations}
        onCancel={() => setSelected(null)}
      />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px"
      }}>
        {locations.map((loc) => (
          <div key={loc._id} style={{
            background: "#2b2b2b",
            padding: "15px",
            borderRadius: "10px",
            width: "250px"
          }}>
            <img
              src={loc.image || "https://placehold.co/250x150"}
              alt={loc.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{loc.name}</h3>
            <p>{loc.region}</p>
            <small>{loc.description}</small>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => setSelected(loc)}>Editar</button>
              <button
                style={{ background: "crimson", marginLeft: "5px" }}
                onClick={() => deleteLocation(loc._id)}
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
