import React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Material Symbols Rounded glyph name, e.g. "add", "close", "arrow_back". */
  icon?: string;
  type?: "primary" | "secondary" | "tertiary" | "ghost";
  /** Diameter in px. */
  size?: number;
  disabled?: boolean;
  ariaLabel?: string;
}

/** Round, icon-only button. */
export function IconButton(props: IconButtonProps): JSX.Element;
