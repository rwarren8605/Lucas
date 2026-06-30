import React from "react";

/** Segmented control — pick one of N short options. Active segment gets the
 *  yellow brand fill. Wrapper has a hairline border + 4px radius. */
export function SegmentedControl({ options = [], value, onChange, style, ...rest }) {
  const items = options.map((o) => (typeof o === "string" ? { label: o, value: o } : o));
  const active = value ?? items[0]?.value;
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        gap: 4,
        padding: 4,
        borderRadius: "var(--radius-2xs-px)",
        boxShadow: "inset 0 0 0 1px var(--stroke-primary)",
        background: "var(--surface-elevated)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={on}
            onClick={() => onChange && onChange(it.value)}
            style={{
              flex: 1,
              padding: "6px 14px",
              border: "none",
              borderRadius: "var(--radius-2xs-px)",
              background: on ? "var(--color-brand-500)" : "transparent",
              color: on ? "var(--color-gray-900)" : "var(--text-primary)",
              fontFamily: "var(--font-body)",
              fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
              fontSize: 13,
              lineHeight: "16px",
              cursor: "pointer",
              transition: "background 120ms ease",
              whiteSpace: "nowrap",
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
