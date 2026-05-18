import React, { useState } from "react";
import TeamRow from "./TeamRow";

export default function GroupCard({ group, onChange }) {
  const [teamCounts, setTeamCounts] = useState({});

  const handleTeamChange = (code, count) => {
    const updated = { ...teamCounts, [code]: count };
    setTeamCounts(updated);

    const total = Object.values(updated).reduce((a, b) => a + b, 0);

    if (onChange) onChange(group.letter, total);
  };

  const totalGroup = Object.values(teamCounts).reduce((a, b) => a + b, 0);

  return (
    <div style={styles.card}>

      {/* ⭐ NUEVO: Título + Avance en la misma línea */}
      <div style={styles.headerRow}>
        <div style={styles.title}>
          Grupo {group.letter} –{" "}
          {group.teams.map((t, i) => (
            <span key={i}>
              {t.name} {t.flag}
              {i < group.teams.length - 1 ? " – " : ""}
            </span>
          ))}
        </div>

        <div style={styles.progress}>
          Avance: {totalGroup}/80
        </div>
      </div>

      {/* LISTA DE PAÍSES */}
      <div style={styles.list}>
        {group.teams.map((team) => (
          <TeamRow
            key={team.code}
            team={team}
            onChange={handleTeamChange}
          />
        ))}
      </div>

    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    boxSizing: "border-box",
    background: "#109DFA",
    borderRadius: "6px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  // ⭐ NUEVO: fila horizontal para título + avance
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "20px",
  },

  progress: {
    fontSize: "13px",
    fontWeight: "bold",
    textAlign: "right",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
};
