import React from "react";

/** Loading skeleton — a shimmer placeholder sized to match real content.
 *  Chain multiple Skeletons to build a full-page loading state. */
export function Skeleton({ width = "100%", height = 16, borderRadius, circle = false, style, ...rest }) {
  const r = circle ? "50%" : borderRadius || (typeof height === "number" && height >= 36 ? "var(--radius-md-px)" : "var(--radius-xs-px)");
  const w = circle ? height : width;

  return (
    <div
      style={{
        width: w, height,
        borderRadius: r,
        background: "var(--surface-recessed)",
        position: "relative", overflow: "hidden",
        flex: "none",
        ...style,
      }}
      {...rest}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--surface-elevated) 80%, transparent) 50%, transparent 100%)",
        animation: "skeleton-shimmer 1.5s ease infinite",
      }} />
    </div>
  );
}
