import React from "react";

function useTheme() {
  const [theme, setTheme] = React.useState(
    () => (typeof document !== "undefined" ? document.documentElement.dataset.theme || "light" : "light")
  );
  React.useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setTheme(el.dataset.theme || "light"));
    obs.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return theme;
}

/** Data table with sticky header row, optional zebra striping, and full token theming.
 *  `columns` can be plain strings (used as both label and key) or `{label, key, align}` objects. */
export const Table = ({ columns = [], rows = [], striped = false, style, ...rest }) => {
  const theme = useTheme();
  const dark = theme === "dark";
  const cols = columns.map(c => typeof c === "string" ? { label: c, key: c, align: "left" } : { align: "left", ...c });

  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--radius-md-px)", border: "1px solid var(--stroke-subtle)", ...style }} {...rest}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 14 }}>
        <thead>
          <tr style={{ background: dark ? "var(--color-gray-900)" : "var(--surface-recessed)" }}>
            {cols.map((col, i) => (
              <th key={i} style={{
                padding: "10px 18px",
                textAlign: col.align,
                fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10.5,
                letterSpacing: ".08em", textTransform: "uppercase",
                color: "var(--color-gray-500)",
                whiteSpace: "nowrap",
                borderBottom: "1.5px solid var(--stroke-primary)",
              }}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{
              background: striped && ri % 2 === 1 ? "var(--surface-recessed)" : "var(--surface-elevated)",
              transition: "background 0.1s",
            }}>
              {cols.map((col, ci) => (
                <td key={ci} style={{
                  padding: "13px 18px",
                  color: ci === 0 ? "var(--text-primary)" : "var(--text-body)",
                  fontWeight: ci === 0 ? 500 : 400,
                  textAlign: col.align,
                  borderBottom: ri < rows.length - 1 ? "1px solid var(--stroke-subtle)" : "none",
                  whiteSpace: "nowrap",
                }}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
