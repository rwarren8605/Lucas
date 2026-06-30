import React from "react";

/** Underline tabs — active tab gets a bold black label + underline. */
export function Tabs({ tabs = [], value, onChange, style, ...rest }) {
  const items = tabs.map((t) => (typeof t === "string" ? { label: t, value: t } : t));
  const active = value ?? items[0]?.value;
  return (
    <div style={{ display: "flex", gap: 24, borderBottom: "1px solid var(--stroke-subtle)", ...style }} {...rest}>
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.value}
            onClick={() => onChange && onChange(it.value)}
            style={{
              position: "relative",
              border: "none",
              background: "transparent",
              padding: "10px 0",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
              fontSize: 15,
              letterSpacing: "-0.01em",
              color: on ? "var(--color-brand-500)" : "var(--color-gray-500)",
            }}
          >
            {it.label}
            {on && (
              <span style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: 2.5, borderRadius: "var(--radius-pill)", background: "var(--color-brand-500)" }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
