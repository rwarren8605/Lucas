import React from "react";

/** User avatar — image if src provided, else initials on brand yellow.
 *  Supports circle, rounded, or square shape. Optional online/offline indicator dot. */
export function Avatar({ src, name, size = 40, shape = "circle", indicator, style, ...rest }) {
  const initial = name ? name.trim().split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase() : "?";
  const radius = shape === "circle" ? "50%" : shape === "rounded" ? "var(--radius-sm-px)" : "var(--radius-xs-px)";
  const fontSize = Math.round(size * 0.36);

  const indicatorColors = { online: "#22c55e", offline: "var(--color-gray-400)", busy: "var(--color-red-500)", away: "var(--color-orange-500)" };

  return (
    <div style={{ position: "relative", display: "inline-flex", flex: "none", ...style }} {...rest}>
      <div style={{
        width: size, height: size, borderRadius: radius,
        background: src ? "var(--surface-recessed)" : "var(--color-brand-500)",
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
        flex: "none",
        boxShadow: "inset 0 0 0 1.5px rgba(0,0,0,.08)",
      }}>
        {src
          ? <img src={src} alt={name || "Avatar"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize, color: "#121212", lineHeight: 1, userSelect: "none" }}>{initial}</span>}
      </div>

      {indicator && (
        <span style={{
          position: "absolute", bottom: 0, right: 0,
          width: Math.max(10, size * 0.26), height: Math.max(10, size * 0.26),
          borderRadius: "50%",
          background: indicatorColors[indicator] || indicatorColors.offline,
          border: "2px solid var(--surface-elevated)",
        }} />
      )}
    </div>
  );
}
