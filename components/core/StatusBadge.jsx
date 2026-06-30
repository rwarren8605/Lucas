import React from "react";

/** Small status pill (e.g. "Done", "Start", "Locked"). Five semantic tones. */
export function StatusBadge({ children, status = "neutral", icon, style, ...rest }) {
  const tones = {
    success: { background: "var(--fill-surface-green)", color: "var(--fill-text-green)" },
    error: { background: "var(--fill-surface-red)", color: "var(--fill-text-red)" },
    warning: { background: "var(--fill-surface-orange)", color: "var(--fill-text-orange)" },
    brand: { background: "var(--fill-surface-yellow)", color: "var(--fill-text-yellow)" },
    neutral: { background: "var(--color-gray-200)", color: "var(--color-gray-700)" },
    solid: { background: "var(--color-gray-900)", color: "var(--color-gray-50)" },
    solidBrand: { background: "var(--color-brand-500)", color: "var(--color-gray-900)" },
  };
  const t = tones[status] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 8px",
        borderRadius: "var(--radius-xs-px)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "-0.007em",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {icon && <span className="material-symbols-rounded" style={{ fontSize: 14 }}>{icon}</span>}
      {children}
    </span>
  );
}
