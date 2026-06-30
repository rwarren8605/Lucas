import React from "react";

export interface RadioButtonProps {
  checked?: boolean;
  label?: string;
  onChange?: (next: true) => void;
  disabled?: boolean;
  error?: boolean;
  size?: number;
  style?: React.CSSProperties;
}

/** Single radio option with optional label. */
export function RadioButton(props: RadioButtonProps): JSX.Element;
