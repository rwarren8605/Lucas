import React from "react";

/** Vertically stacked expandable sections — FAQ, glossary, detailed breakdowns.
 *  Default: single-open (closes others when one opens). Set `multiple` to keep many open. */
export function Accordion({ items = [], multiple = false, style, ...rest }) {
  const [open, setOpen] = React.useState({});

  const toggle = (i) => {
    setOpen(s => multiple ? { ...s, [i]: !s[i] } : { [i]: !s[i] });
  };

  return (
    <div style={{ border: "1px solid var(--stroke-subtle)", borderRadius: "var(--radius-md-px)", overflow: "hidden", ...style }} {...rest}>
      {items.map((item, i) => {
        const isOpen = !!open[i];
        const label = item.title || item.label;
        return (
          <div key={i} style={{ borderTop: i > 0 ? "1px solid var(--stroke-subtle)" : "none" }}>
            <button
              onClick={() => toggle(i)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
                width: "100%", padding: "15px 20px",
                background: isOpen ? "var(--surface-recessed)" : "var(--surface-elevated)",
                border: "none", cursor: "pointer", textAlign: "left",
                transition: "background 0.15s",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--text-primary)", flex: 1 }}>{label}</span>
              <span className="material-symbols-rounded" style={{ fontSize: 20, color: "var(--color-gray-400)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s", flex: "none" }}>expand_more</span>
            </button>
            <div style={{ maxHeight: isOpen ? "800px" : "0", overflow: "hidden", transition: "max-height 0.28s cubic-bezier(0.4,0,0.2,1)" }}>
              <div style={{ padding: "4px 20px 20px", fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--text-body)" }}>
                {item.content || item.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
