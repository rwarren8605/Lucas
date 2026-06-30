import React from "react";

/** Pill chip — selectable filter / category token. Outlined when unselected,
 *  yellow-filled when selected. Optional count bubble & leading icon. */
export function Chip({
  children,
  selected = false,
  count,
  leadingIcon,
  onClick,
  style,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        minHeight: 32,
        border: "none",
        borderRadius: "var(--radius-pill)",
        background: selected ? "var(--color-brand-500)" : "transparent",
        boxShadow: selected ? "none" : "inset 0 0 0 1px var(--text-primary)",
        color: selected ? "var(--color-gray-900)" : "var(--text-primary)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.01em",
        cursor: "pointer",
        transition: "background 120ms ease",
        ...style,
      }}
      {...rest}
    >
      {leadingIcon && (
        <span className="material-symbols-rounded" style={{ fontSize: 18 }}>{leadingIcon}</span>
      )}
      {children}
      {count != null && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 18,
            height: 18,
            padding: "0 5px",
            borderRadius: "var(--radius-pill)",
            background: selected ? "rgba(0,0,0,0.14)" : "var(--color-gray-200)",
            fontFamily: "var(--font-ui)",
            fontWeight: 600,
            fontSize: 11,
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}
