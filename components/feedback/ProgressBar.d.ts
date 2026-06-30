import React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Completed count (segmented) or current value (continuous). */
  value?: number;
  total?: number;
  /** Segmented (one pill per step) vs continuous fill. */
  segmented?: boolean;
  height?: number;
  color?: string;
}

/** Module / quiz progress indicator. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
