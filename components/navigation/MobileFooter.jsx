import React from "react";

/** Sticky bottom action bar — primary button, optional secondary below.
 *  Mirrors the app's two-button footer. */
export function MobileFooter({ primary, secondary, children, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "12px 16px calc(12px + env(safe-area-inset-bottom))",
        background: "var(--surface-primary)",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.05)",
        ...style,
      }}
      {...rest}
    >
      {children}
      {primary}
      {secondary}
    </div>
  );
}
