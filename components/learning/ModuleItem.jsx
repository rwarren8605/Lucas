import React from "react";

/** A row in the module list — completion icon, title, meta, and a trailing
 *  status badge. status: completed | active | locked. */
export function ModuleItem({ title, meta, status = "active", badge, onClick, style, ...rest }) {
  const icon = {
    completed: { glyph: "check_circle", color: "var(--color-green-500)", fill: "var(--fill-surface-green)" },
    active: { glyph: "play_circle", color: "var(--color-brand-600)", fill: "var(--fill-surface-yellow)" },
    locked: { glyph: "lock", color: "var(--color-gray-500)", fill: "var(--surface-recessed)" },
  }[status];
  const isLocked = status === "locked";
  return (
    <button
      onClick={isLocked ? undefined : onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        textAlign: "left",
        padding: "12px 14px",
        border: "none",
        borderRadius: "var(--radius-md-px)",
        background: "var(--surface-elevated)",
        boxShadow: "var(--shadow-card)",
        cursor: isLocked ? "default" : "pointer",
        opacity: isLocked ? 0.7 : 1,
        ...style,
      }}
      {...rest}
    >
      <span style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "var(--radius-pill)", background: icon.fill }}>
        <span className="material-symbols-rounded" style={{ fontSize: 22, color: icon.color }}>{icon.glyph}</span>
      </span>
      <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 15, lineHeight: "20px", letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{title}</span>
        {meta && <span style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: "16px", color: "var(--color-gray-500)" }}>{meta}</span>}
      </span>
      {badge}
    </button>
  );
}
