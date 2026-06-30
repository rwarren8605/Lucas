import React from "react";

/** Pagination dots — active dot stretches into a yellow pill. */
export function PaginationDots({ count = 4, active = 0, onDotClick, style, ...rest }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center", ...style }} {...rest}>
      {Array.from({ length: count }).map((_, i) => {
        const on = i === active;
        return (
          <span
            key={i}
            onClick={() => onDotClick && onDotClick(i)}
            style={{
              width: on ? 22 : 8,
              height: 8,
              borderRadius: "var(--radius-pill)",
              background: on ? "var(--color-brand-500)" : "var(--fill-inactive)",
              cursor: onDotClick ? "pointer" : "default",
              transition: "width 200ms ease, background 200ms ease",
            }}
          />
        );
      })}
    </div>
  );
}
