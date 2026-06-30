import React from "react";

/** iOS-style bottom sheet. Renders a backdrop + sliding panel from the bottom.
 *  Use `contained` prop to position relative to a parent instead of the viewport
 *  (useful for demos / mockups). */
export function BottomSheet({ open = false, onClose, title, children, contained = false, style, ...rest }) {
  if (!open) return null;
  const pos = contained ? "absolute" : "fixed";

  return (
    <React.Fragment>
      <div
        onClick={onClose}
        style={{
          position: pos, inset: 0,
          background: "rgba(0,0,0,.45)",
          zIndex: 100,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      />
      <div
        style={{
          position: pos, bottom: 0, left: 0, right: 0, zIndex: 101,
          background: "var(--surface-elevated)",
          borderRadius: "24px 24px 0 0",
          boxShadow: "var(--shadow-lg)",
          ...style,
        }}
        {...rest}
      >
        {/* drag handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 6px" }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--stroke-primary)" }} />
        </div>

        {title && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 20px 14px" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-.01em", color: "var(--text-primary)" }}>{title}</span>
            {onClose && (
              <button onClick={onClose} style={{ background: "var(--surface-recessed)", border: "none", cursor: "pointer", color: "var(--text-body)", padding: 6, borderRadius: 8, display: "flex", alignItems: "center" }}>
                <span className="material-symbols-rounded" style={{ fontSize: 20 }}>close</span>
              </button>
            )}
          </div>
        )}

        <div style={{ padding: title ? "0 20px 32px" : "8px 20px 32px" }}>{children}</div>
      </div>
    </React.Fragment>
  );
}
