import React from "react";

/** Text / dropdown / textarea field with label + optional helper text.
 *  States: default, active (focus), error, disabled. */
export function Input({
  label,
  placeholder = "",
  value,
  onChange,
  state = "default",
  type = "text",
  helperText,
  multiline = false,
  dropdown = false,
  style,
  ...rest
}) {
  const borderByState = {
    default: "inset 0 0 0 1px var(--stroke-action-default)",
    active: "inset 0 0 0 1.5px var(--stroke-action-active)",
    error: "inset 0 0 0 1.5px var(--stroke-action-error)",
    disabled: "inset 0 0 0 1px var(--stroke-action-disabled)",
  };
  const isDisabled = state === "disabled";
  const labelColor = state === "error" ? "var(--text-action-error)" : "var(--text-primary)";

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", ...style }}>
      {label && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: "20px", color: labelColor }}>
          {label}
        </span>
      )}
      <div
        style={{
          display: "flex",
          alignItems: multiline ? "flex-start" : "center",
          gap: 8,
          padding: "10px 12px",
          borderRadius: "var(--radius-xs-px)",
          background: isDisabled ? "var(--surface-recessed)" : "var(--surface-elevated)",
          boxShadow: borderByState[state],
        }}
      >
        {multiline ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            rows={3}
            style={inputBaseStyle}
            {...rest}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            style={inputBaseStyle}
            {...rest}
          />
        )}
        {dropdown && (
          <span className="material-symbols-rounded" style={{ fontSize: 20, color: "var(--color-gray-500)" }}>
            expand_more
          </span>
        )}
      </div>
      {helperText && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: "16px", color: state === "error" ? "var(--text-action-error)" : "var(--color-gray-500)" }}>
          {helperText}
        </span>
      )}
    </label>
  );
}

const inputBaseStyle = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  resize: "none",
  fontFamily: "var(--font-body)",
  fontSize: 14,
  lineHeight: "20px",
  color: "var(--text-primary)",
  width: "100%",
};
