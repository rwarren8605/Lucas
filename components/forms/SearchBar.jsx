import React from "react";

/** Search bar — pill-shaped input with leading search icon and clear button.
 *  Activates a yellow focus ring. Fully controlled (`value` + `onChange`). */
export function SearchBar({ value = "", onChange, placeholder = "Search…", onClear, disabled = false, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "10px 14px",
        borderRadius: "var(--radius-pill)",
        background: "var(--surface-recessed)",
        border: "1.5px solid " + (focused ? "var(--stroke-action-active)" : "transparent"),
        opacity: disabled ? 0.5 : 1,
        transition: "border-color 0.15s",
        ...style,
      }}
      {...rest}
    >
      <span className="material-symbols-rounded" style={{ fontSize: 19, color: "var(--color-gray-400)", flex: "none" }}>search</span>
      <input
        value={value}
        onChange={e => !disabled && onChange && onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          flex: 1, border: "none", background: "transparent", outline: "none",
          fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-primary)",
          minWidth: 0,
        }}
      />
      {value && !disabled && (
        <button
          onClick={() => { onClear ? onClear() : onChange && onChange(""); }}
          style={{ background: "var(--stroke-subtle)", border: "none", cursor: "pointer", color: "var(--text-body)", padding: 2, borderRadius: "50%", display: "flex", alignItems: "center", flex: "none" }}
        >
          <span className="material-symbols-rounded" style={{ fontSize: 14 }}>close</span>
        </button>
      )}
    </div>
  );
}
