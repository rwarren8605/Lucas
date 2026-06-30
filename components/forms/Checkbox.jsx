import React from "react";

/** Checkbox with optional label. Selected = black rounded square + check. */
export function Checkbox({ checked = false, label, onChange, disabled = false, size = 24, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: size,
          height: size,
          borderRadius: "var(--radius-2xs-px)",
          background: checked ? (disabled ? "var(--color-gray-400)" : "var(--surface-action-primary-default)") : "transparent",
          boxShadow: checked ? "none" : `inset 0 0 0 1.5px ${disabled ? "var(--color-gray-400)" : "var(--color-gray-500)"}`,
          transition: "background 120ms ease",
        }}
        {...rest}
      >
        {checked && (
          <span className="material-symbols-rounded" style={{ fontSize: size * 0.72, color: "var(--text-on-action-primary)" }}>
            check
          </span>
        )}
      </span>
      {label && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "22px", color: disabled ? "var(--color-gray-500)" : "var(--text-primary)" }}>
          {label}
        </span>
      )}
    </label>
  );
}
