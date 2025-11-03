import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar.jsx";
import CharacterForm from "../components/CharacterForm.jsx";

export default function CharactersPage() {
  const { token } = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchCharacters = async () => {
    const res = await fetch("http://localhost:5000/api/characters", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setCharacters(data);
  };

  const deleteCharacter = async (id) => {
    if (!confirm("¿Eliminar personaje?")) return;
    await fetch(`http://localhost:5000/api/characters/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCharacters();
  };

  useEffect(() => { fetchCharacters(); }, []);

  return (
    <div>
      <Navbar />
      <h2>🧍 Personajes</h2>

      <CharacterForm
        token={token}
        selected={selected}
        onSaved={fetchCharacters}
        onCancel={() => setSelected(null)}
      />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "20px"
      }}>
        {characters.map((ch) => (
          <div key={ch._id} style={{
            background: "#2b2b2b",
            padding: "15px",
            borderRadius: "10px",
            width: "250px"
          }}>
            <img
              src={ch.image || "https://placehold.co/250x150"}
              alt={ch.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{ch.name}</h3>
            <p>{ch.role}</p>
            <small>{ch.description}</small>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => setSelected(ch)}>Editar</button>
              <button
                style={{ background: "crimson", marginLeft: "5px" }}
                onClick={() => deleteCharacter(ch._id)}
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