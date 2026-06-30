import React from "react";

/**
 * Primary action control for the LUCAS app.
 * @startingPoint section="Core" subtitle="Primary / secondary / tertiary buttons" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. primary = black solid, secondary = outlined, tertiary = yellow brand. */
  type?: "primary" | "secondary" | "tertiary";
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
