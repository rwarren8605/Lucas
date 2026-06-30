import React from "react";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  status?: "success" | "error" | "warning" | "brand" | "neutral" | "solid" | "solidBrand";
  /** Optional Material Symbols glyph. */
  icon?: string;
}

/** Compact status pill — module / answer / item state. */
export function StatusBadge(props: StatusBadgeProps): JSX.Element;
