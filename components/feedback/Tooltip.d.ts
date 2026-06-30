import React from "react";

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The hover target. */
  children: React.ReactNode;
  /** Tooltip text. */
  label: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
}

/** Hover tooltip with dark bubble. */
export function Tooltip(props: TooltipProps): JSX.Element;
