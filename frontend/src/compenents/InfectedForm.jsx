import { useState, useEffect } from "react";

export default function LocationForm({ token, selected, onSaved, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    region: "",
    description: "",
    dangerLevel: "",
    image: ""
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = selected ? "PUT" : "POST";
    const url = selected
      ? `http://localhost:5000/api/locations/${selected._id}`
      : "http://localhost:5000/api/locations";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setForm({ name: "", region: "", description: "", dangerLevel: "", image: "" });
      onSaved();
    } else {
      alert("❌ Error al guardar localización");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Región" value={form.region}
        onChange={(e) => setForm({ ...form, region: e.target.value })} />
      <input placeholder="Nivel de peligro" value={form.dangerLevel}
        onChange={(e) => setForm({ ...form, dangerLevel: e.target.value })} />
      <input placeholder="URL Imagen" value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <textarea placeholder="Descripción" value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        style={{ background: "#222", color: "#fff", borderRadius: "5px", padding: "8px" }}
      />
      <button type="submit">{selected ? "Actualizar" : "Agregar"}</button>
      {selected && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
}