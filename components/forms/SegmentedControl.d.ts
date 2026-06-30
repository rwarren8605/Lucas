import React from "react";

export interface SegmentOption { label: string; value: string; }

export interface SegmentedControlProps {
  /** Strings or {label,value} objects. */
  options: (string | SegmentOption)[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** One-of-N segmented selector; active segment is yellow. */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
