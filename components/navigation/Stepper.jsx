import React from "react";

/** Returns "dark" or "light" based on the html[data-theme] attribute, reactive. */
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

/** Horizontal step-progress indicator.
 *
 * Light: completed = yellow filled + dark check; active = black filled + white number.
 * Dark:  completed = yellow filled + dark check; active = yellow outlined + yellow number.
 * Both:  inactive = gray outlined circle; connector = static gray line. */
export function Stepper({ steps = [], current = 0, style, ...rest }) {
  const theme = useTheme();
  const dark = theme === "dark";

  // Connector line color
  const lineColor = dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)";

  // Inactive circle border
  const inactiveBorder = dark ? "1.5px solid rgba(255,255,255,0.25)" : "1.5px solid var(--color-gray-300, #C8C8C8)";

  return (
    <div style={{ display: "flex", alignItems: "flex-start", width: "100%", ...style }} {...rest}>
      {steps.map((step, i) => {
        const done   = i < current;
        const active = i === current;
        const label  = typeof step === "string" ? step : step.label;

        // Circle styles
        let circleBg, circleColor, circleBorder;
        if (done) {
          circleBg     = "var(--color-brand-400, #F5C518)";
          circleColor  = "#121212";
          circleBorder = "none";
        } else if (active) {
          if (dark) {
            circleBg     = "transparent";
            circleColor  = "var(--color-brand-400, #F5C518)";
            circleBorder = "2px solid var(--color-brand-400, #F5C518)";
          } else {
            circleBg     = "#121212";
            circleColor  = "#fff";
            circleBorder = "none";
          }
        } else {
          circleBg     = "transparent";
          circleColor  = dark ? "rgba(255,255,255,0.35)" : "var(--color-gray-400)";
          circleBorder = inactiveBorder;
        }

        // Label styles
        const labelColor = active
          ? (dark ? "#fff" : "var(--text-primary)")
          : done
            ? (dark ? "rgba(255,255,255,0.6)" : "var(--color-gray-500)")
            : (dark ? "rgba(255,255,255,0.35)" : "var(--color-gray-400)");

        return (
          <React.Fragment key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: "none" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: circleBg,
                color: circleColor,
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                border: circleBorder,
                boxSizing: "border-box",
                transition: "background 0.25s, border-color 0.25s, color 0.25s",
              }}>
                {done
                  ? <span className="material-symbols-rounded" style={{ fontSize: 17, fontVariationSettings: "'wght' 700" }}>check</span>
                  : <span>{i + 1}</span>}
              </div>
              {label && (
                <span style={{
                  fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: active ? 700 : 600,
                  color: labelColor,
                  textAlign: "center", maxWidth: 80, lineHeight: 1.35,
                  transition: "color 0.25s",
                }}>{label}</span>
              )}
            </div>

            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 1.5, marginTop: 15,
                background: lineColor,
                transition: "background 0.25s",
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
