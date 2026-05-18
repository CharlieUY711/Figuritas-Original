import React from 'react';
import GroupCard from "./GroupCard";
import { GROUPS } from "../data/groups";

export default function GroupsPage() {
  const visibleGroups = GROUPS.slice(0, 12);

  const styles = {
   grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 8,
    width: "100%",
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



