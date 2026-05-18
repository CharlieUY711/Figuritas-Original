import React from 'react';
import GroupCard from "./GroupCard";
import { GROUPS } from "../data/groups";

export default function GroupsPage() {
  const visibleGroups = GROUPS.slice(0, 12);

  const styles = {
    page: {
      background: "#001F3F",
      minHeight: "100vh",
      padding: 20,
      color: "white",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(4, auto)",
      gap: 12,
    },
  };

  return (
    <div style={styles.page}>
        
      <div style={styles.grid}>
        {visibleGroups.map((g) => (
          <GroupCard key={g.letter} group={g} />
        ))}
      </div>
    </div>
  );
}



