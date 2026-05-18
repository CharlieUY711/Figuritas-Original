import React, { useState } from "react";

export default function GroupsTable({ group }) {
  // Cada grupo tiene 4 selecciones, cada una con 20 stickers
  // Mostramos los números 1–20 como figuritas
  const [items, setItems] = useState(
    Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      collected: false,
    }))
  );

  const toggle = (i) => {
    const copy = [...items];
    copy[i].collected = !copy[i].collected;
    setItems(copy);
  };

  const styles = {
    box: {
      background: "#012A4A",
      padding: 12,
      borderRadius: 10,
      boxShadow: "2px 2px 4px #0005",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      textAlign: "center",
    },
    teams: {
      fontSize: 13,
      marginBottom: 10,
      textAlign: "center",
      opacity: 0.8,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 6,
    },
    cell: {
      height: 30,
      borderRadius: 6,
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "0.15s",
      fontWeight: "bold",
      color: "white",
    },
  };

  return (
    <div style={styles.box}>
      <div style={styles.title}>Grupo {group.letter}</div>

      <div style={styles.teams}>
        {group.teams
          .map((t) => `${t.name} (${t.code})`)
          .join(" · ")}
      </div>

      <div style={styles.grid}>
        {items.map((it, i) => (
          <div
            key={it.id}
            onClick={() => toggle(i)}
            style={{
              ...styles.cell,
              background: it.collected ? "#2ECC71" : "#0A3D62",
              color: it.collected ? "#000" : "#FFF",
              boxShadow: it.collected
                ? "inset 2px 2px 4px #333"
                : "2px 2px 4px #0005",
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
