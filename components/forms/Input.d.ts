import React from "react";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Visual state. */
  state?: "default" | "active" | "error" | "disabled";
  type?: string;
  helperText?: string;
  multiline?: boolean;
  /** Show a trailing dropdown chevron. */
  dropdown?: boolean;
  style?: React.CSSProperties;
}

/** Labelled text / dropdown / textarea field. */
export function Input(props: InputProps): JSX.Element;
