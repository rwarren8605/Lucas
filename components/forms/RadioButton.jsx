import React from "react";

/** Radio button with optional label. Selected = black ring + filled dot.
 *  Error state turns the ring red. */
export function RadioButton({ checked = false, label, onChange, disabled = false, error = false, size = 18, style, ...rest }) {
  const ringColor = error
    ? "var(--stroke-action-error)"
    : disabled
    ? "var(--color-gray-400)"
    : checked
    ? "var(--surface-action-primary-default)"
    : "var(--color-gray-500)";
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: size,
          height: size,
          borderRadius: "50%",
          boxShadow: `inset 0 0 0 1.5px ${ringColor}`,
          transition: "box-shadow 120ms ease",
        }}
        {...rest}
      >
        {checked && (
          <span style={{ width: size * 0.5, height: size * 0.5, borderRadius: "50%", background: ringColor }} />
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
