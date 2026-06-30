import React from "react";

/**
 * LUCAS Button — the primary call-to-action across the app.
 * Three types (primary / secondary / tertiary) × default / hover / disabled.
 */
export function Button({
  children,
  type = "primary",
  size = "lg",
  disabled = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  style,
  ...rest
}) {
  const sizes = {
    lg: { padding: "16px 24px", fontSize: 18, minHeight: 52 },
    md: { padding: "12px 20px", fontSize: 16, minHeight: 44 },
    sm: { padding: "8px 16px", fontSize: 14, minHeight: 36 },
  };
  const s = sizes[size] || sizes.lg;

  const palettes = {
    primary: {
      background: "var(--surface-action-primary-default)",
      color: "var(--text-on-action-primary)",
      boxShadow: "none",
    },
    secondary: {
      background: "var(--surface-action-secondary-default)",
      color: "var(--text-primary)",
      boxShadow: "inset 0 0 0 1px var(--stroke-primary)",
    },
    tertiary: {
      background: "var(--surface-action-tertiary-default)",
      color: "var(--color-gray-900)",
      boxShadow: "none",
    },
  };
  const p = palettes[type] || palettes.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: fullWidth ? "100%" : "auto",
        minHeight: s.minHeight,
        padding: s.padding,
        border: "none",
        borderRadius: "var(--radius-sm-px)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: s.fontSize,
        lineHeight: "20px",
        letterSpacing: "-0.01em",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "filter 120ms ease, transform 120ms ease",
        ...(disabled
          ? {
              background: "var(--surface-action-primary-disabled)",
              color: "var(--text-action-disabled)",
              boxShadow: "none",
            }
          : p),
        ...style,
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
