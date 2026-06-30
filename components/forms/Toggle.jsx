import React from "react";

/** Binary on/off toggle switch. ON uses brand yellow; OFF uses the inactive fill.
 *  `size` = sm | md | lg. Passes aria-checked for accessibility. */
export function Toggle({ checked = false, onChange, disabled = false, label, labelPosition = "right", size = "md", style, ...rest }) {
  const s = { sm: { w:36, h:20, knob:14, gap:3 }, md: { w:44, h:24, knob:18, gap:3 }, lg: { w:52, h:28, knob:22, gap:3 } }[size] || { w:44, h:24, knob:18, gap:3 };

  const track = (
    <div
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        position: "relative", display: "inline-flex", alignItems: "center", flex: "none",
        width: s.w, height: s.h, borderRadius: 999,
        background: checked ? "var(--color-brand-400, #F5C518)" : "#121212",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.2s, border-color 0.2s",
        boxSizing: "border-box",
      }}
    >
      <div style={{
        position: "absolute",
        top: s.gap - 1,
        left: checked ? s.w - s.knob - s.gap : s.gap - 1,
        width: s.knob, height: s.knob, borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,.22)",
        transition: "left 0.2s, background 0.2s",
      }} />
    </div>
  );

  if (!label) return <div style={{ display: "inline-flex", opacity: disabled ? 0.45 : 1, ...style }} {...rest}>{track}</div>;

  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      {labelPosition === "left" && <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>{label}</span>}
      {track}
      {labelPosition === "right" && <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>{label}</span>}
    </label>
  );
}
