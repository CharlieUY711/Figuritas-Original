import React, { useState } from "react";
import FWCGrid from "./FWCGrid";

export default function PageLayout({ children }) {

  // ✔ Estado centralizado
  const [fwcCount, setFwcCount] = useState(0);
  const [groupsCount, setGroupsCount] = useState(0);

  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#003366",
      color: "white",
      fontFamily: "sans-serif"
    }}>

      {/* 🟦 HEAD */}
      <header style={{
        padding: "12px 20px",
        fontSize: 22,
        fontWeight: "bold",
        borderBottom: "2px solid rgba(255,255,255,0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        Charlie Figuritas

        {/* ✔ Avance FWC + Grupos */}
        <span style={{ fontSize: 14, fontWeight: "normal" }}>
          Avance: FWC {fwcCount}/20 – Grupos {groupsCount}/960
        </span>
      </header>

      {/* 🟩 FWC ZONE */}
      {/* ✔ FWCGrid reporta su conteo */}
      <FWCGrid onChange={setFwcCount} />

      {/* 🟧 GROUPS ZONE */}
      <main style={{ flex: 1, padding: "20px" }}>
        {/* ✔ GroupsPage reporta su conteo */}
        {React.cloneElement(children, { onChange: setGroupsCount })}
      </main>

      {/* 🟫 FOOTER */}
      <footer style={{
        padding: "10px 20px",
        fontSize: 14,
        opacity: 0.8,
        borderTop: "2px solid rgba(255,255,255,0.2)"
      }}>
        Charlie Figuritas — Versión 1.00
      </footer>

    </div>
  );
}
