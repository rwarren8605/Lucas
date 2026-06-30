import React from "react";

/**
 * Icon-only round button. Renders a Material Symbols Rounded glyph — the
 * host page must load the Material Symbols Rounded font (see ICONOGRAPHY).
 */
export function IconButton({
  icon = "add",
  type = "primary",
  size = 44,
  disabled = false,
  ariaLabel,
  style,
  ...rest
}) {
  const palettes = {
    primary: { background: "var(--surface-action-primary-default)", color: "var(--text-on-action-primary)", boxShadow: "none" },
    secondary: { background: "var(--surface-action-secondary-default)", color: "var(--text-primary)", boxShadow: "inset 0 0 0 1px var(--stroke-primary)" },
    tertiary: { background: "var(--surface-action-tertiary-default)", color: "var(--color-gray-900)", boxShadow: "none" },
    ghost: { background: "transparent", color: "var(--text-primary)", boxShadow: "none" },
  };
  const p = disabled
    ? { background: "var(--surface-action-primary-disabled)", color: "var(--text-action-disabled)", boxShadow: "none" }
    : palettes[type] || palettes.primary;

  return (
    <button
      aria-label={ariaLabel || icon}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        border: "none",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "filter 120ms ease, transform 120ms ease",
        ...p,
        ...style,
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.92)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      <span className="material-symbols-rounded" style={{ fontSize: size * 0.5 }}>{icon}</span>
    </button>
  );
}
