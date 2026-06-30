import React from "react";

/** Range slider — a native <input type="range"> with a custom branded track + knob overlay.
 *  Use `format` to display the value as currency, percentage, etc. */
export function Slider({ value = 0, min = 0, max = 100, step = 1, onChange, label, format, helperText, disabled = false, style, ...rest }) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;
  const display = format ? format(value) : value;

  return (
    <div style={{ width: "100%", ...style }} {...rest}>
      {(label || format !== undefined) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          {label && <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, color: "var(--text-body)" }}>{label}</span>}
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-.015em", color: "var(--text-primary)", marginLeft: "auto" }}>{display}</span>
        </div>
      )}

      {/* track + knob */}
      <div style={{ position: "relative", height: 24, display: "flex", alignItems: "center" }}>
        {/* track bg */}
        <div style={{ position: "absolute", left: 0, right: 0, height: 6, borderRadius: 3, background: "var(--fill-inactive)", overflow: "visible" }}>
          {/* filled portion */}
          <div style={{ width: pct + "%", height: "100%", borderRadius: 3, background: disabled ? "var(--color-gray-400)" : "var(--color-brand-500)", transition: "width 0.08s" }} />
        </div>
        {/* knob */}
        <div style={{
          position: "absolute",
          left: "calc(" + pct + "% - 12px)",
          width: 24, height: 24, borderRadius: "50%",
          background: "var(--surface-elevated)",
          border: "2.5px solid " + (disabled ? "var(--color-gray-400)" : "var(--color-brand-500)"),
          boxShadow: "var(--shadow-sm)",
          transition: "left 0.08s",
          pointerEvents: "none",
        }} />
        {/* invisible native input for interaction */}
        <input
          type="range" min={min} max={max} step={step} value={value}
          disabled={disabled}
          onChange={e => onChange && onChange(Number(e.target.value))}
          style={{ position: "absolute", inset: 0, width: "100%", opacity: 0, cursor: disabled ? "not-allowed" : "pointer", margin: 0, height: "100%" }}
        />
      </div>

      {/* min/max labels */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--color-gray-400)" }}>{format ? format(min) : min}</span>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--color-gray-400)" }}>{format ? format(max) : max}</span>
      </div>

      {helperText && <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-body)", marginTop: 4 }}>{helperText}</div>}
    </div>
  );
}
