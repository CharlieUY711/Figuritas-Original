import FWCGrid from "./FWCGrid";

export default function PageLayout({ children }) {
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
        borderBottom: "2px solid rgba(255,255,255,0.2)"
      }}>
        Charlie Figuritas
      </header>

      {/* 🟩 FWC ZONE */}
      
      {/* Nuevo FWCGrid debajo de las 8 FWC */}
      <FWCGrid />


      {/* 🟧 GROUPS ZONE */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
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
