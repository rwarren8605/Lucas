import React from "react";

export type StepperStep = string | { label: string };

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: StepperStep[];
  /** Zero-indexed index of the currently active step. */
  current?: number;
}

/** Horizontal step indicator — completed (green check), active (primary), upcoming (inactive). */
export function Stepper(props: StepperProps): JSX.Element;
