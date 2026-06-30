import React from "react";

/** Card — the workhorse surface. Soft radius, gentle shadow, white/elevated
 *  background. Use `tone="brand"` for the yellow hero banner treatment. */
export function Card({
  children,
  tone = "default",
  padding = 16,
  elevated = true,
  style,
  ...rest
}) {
  const tones = {
    default: { background: "var(--surface-elevated)", color: "var(--text-primary)" },
    recessed: { background: "var(--surface-recessed)", color: "var(--text-primary)" },
    brand: { background: "var(--color-brand-500)", color: "var(--color-gray-900)" },
    dark: { background: "var(--color-gray-900)", color: "var(--color-gray-50)" },
  };
  const t = tones[tone] || tones.default;
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg-px)",
        padding,
        boxShadow: elevated ? "var(--shadow-card)" : "none",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
