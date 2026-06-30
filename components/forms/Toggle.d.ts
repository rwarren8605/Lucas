import React from "react";

export interface ToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  labelPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
}

/** Binary on/off toggle switch. ON = brand yellow; OFF = inactive fill. */
export function Toggle(props: ToggleProps): JSX.Element;
