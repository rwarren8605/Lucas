import React from "react";

/** Top navigation bar — back chevron + centered title + optional trailing slot.
 *  Matches "‹ Module 5 of 5". Tone "brand" for yellow celebration screens. */
export function HeaderNav({ title, onBack, trailing, tone = "default", style, ...rest }) {
  const isBrand = tone === "brand";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 48,
        padding: "0 8px",
        background: isBrand ? "var(--color-brand-500)" : "var(--surface-primary)",
        color: isBrand ? "var(--color-gray-900)" : "var(--text-primary)",
        ...style,
      }}
      {...rest}
    >
      {onBack ? (
        <button onClick={onBack} aria-label="Back" style={{ border: "none", background: "transparent", cursor: "pointer", display: "inline-flex", padding: 8, color: "inherit" }}>
          <span className="material-symbols-rounded" style={{ fontSize: 24 }}>arrow_back_ios_new</span>
        </button>
      ) : (
        <span style={{ width: 40 }} />
      )}
      <span style={{ flex: 1, fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 17, letterSpacing: "-0.01em" }}>{title}</span>
      <span style={{ display: "inline-flex", minWidth: 40, justifyContent: "flex-end" }}>{trailing}</span>
    </div>
  );
}
