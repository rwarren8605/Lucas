import React from "react";

/** Stat tile — small label on top, big value below. Used in the results
 *  scoreboard (Total Time / Avg Score / Modules). Optional divider variant. */
export function StatTile({ label, value, align = "center", style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: align === "center" ? "center" : "flex-start", ...style }} {...rest}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: "16px", color: "var(--color-gray-500)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: 22, lineHeight: "26px", letterSpacing: "-0.02em", color: "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

/** Convenience row that lays out several StatTiles with hairline dividers. */
export function StatRow({ items = [], style, ...rest }) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", ...style }} {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ width: 1, background: "var(--stroke-subtle)", margin: "2px 0" }} />}
          <StatTile label={it.label} value={it.value} style={{ flex: 1 }} />
        </React.Fragment>
      ))}
    </div>
  );
}
