import React from "react";

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: number;
  style?: React.CSSProperties;
}

/** Checkbox with optional inline label. */
export function Checkbox(props: CheckboxProps): JSX.Element;
