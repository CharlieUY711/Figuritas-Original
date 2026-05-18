import React, { useState } from "react";

export default function FWCGrid() {
  // Estado: 20 figuritas, todas inicialmente "no obtenidas"
  const [owned, setOwned] = useState(
    Array.from({ length: 20 }, () => false)
  );

  // Alternar estado al presionar
  const toggle = (index: number) => {
    setOwned((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div
      style={{
       display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: 8,
        padding: "12px 20px",
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const isOn = owned[i];

        return (
          <button
            key={i}
            onClick={() => toggle(i)}
            style={{
	      padding: "12px 20px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              background: isOn ? "#00aa00" : "white",
              color: isOn ? "white" : "black",
              transition: "0.15s",
            }}
          >
           FWC {i + 1}
          </button>
        );
      })}
    </div>
  );
}
