import React from "react";

/** A quiz answer option. Leading letter token (A/B/C/D) or a result icon.
 *  state: default | selected | correct | incorrect. */
export function AnswerRow({ letter, children, state = "default", onClick, style, ...rest }) {
  const styles = {
    default: { border: "1px solid var(--stroke-primary)", bg: "var(--surface-elevated)", tokenBg: "var(--answer-letter-bg)", tokenColor: "var(--answer-letter-color)" },
    selected: { border: "1.5px solid var(--color-gray-900)", bg: "var(--surface-elevated)", tokenBg: "var(--color-gray-900)", tokenColor: "#fff" },
    correct: { border: "1.5px solid var(--color-green-500)", bg: "var(--fill-surface-green)", tokenBg: "var(--color-green-500)", tokenColor: "#fff" },
    incorrect: { border: "1.5px solid var(--color-red-500)", bg: "var(--fill-surface-red)", tokenBg: "var(--color-red-500)", tokenColor: "#fff" },
  }[state];
  const resultGlyph = state === "correct" ? "check" : state === "incorrect" ? "close" : null;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        textAlign: "left",
        padding: "12px 14px",
        borderRadius: "var(--radius-sm-px)",
        background: styles.bg,
        border: styles.border,
        cursor: "pointer",
        transition: "border-color 120ms ease, background 120ms ease",
        ...style,
      }}
      {...rest}
    >
      <span style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "var(--radius-pill)", background: styles.tokenBg, color: styles.tokenColor, fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: 14 }}>
        {resultGlyph ? <span className="material-symbols-rounded" style={{ fontSize: 18 }}>{resultGlyph}</span> : letter}
      </span>
      <span style={{ flex: 1, fontFamily: "var(--font-body)", fontWeight: "var(--weight-medium)", fontSize: 15, lineHeight: "20px", color: "var(--text-primary)" }}>{children}</span>
    </button>
  );
}
