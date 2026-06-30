import React from "react";

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  label?: string;
  /** Format the displayed value (e.g. v => `$${v.toLocaleString()}`). */
  format?: (value: number) => string;
  helperText?: React.ReactNode;
  disabled?: boolean;
}

/** Range slider with branded track, knob, and formatted value display. */
export function Slider(props: SliderProps): JSX.Element;
