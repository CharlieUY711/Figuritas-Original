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
      
      {/* HEADER */}
      <header style={{
        padding: "12px 20px",
        fontSize: 22,
        fontWeight: "bold",
        borderBottom: "2px solid rgba(255,255,255,0.2)"
      }}>
        Charlie Figuritas
      </header>

      {/* 8 FWC */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: 8,
        padding: "12px 20px"
      }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{
            background: "#ff8800",
            padding: "10px 0",
            textAlign: "center",
            borderRadius: 6,
            fontWeight: "bold"
          }}>
            FWC {i + 1}
          </div>
        ))}
      </div>

      {/* BODY */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

      {/* FOOTER */}
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
