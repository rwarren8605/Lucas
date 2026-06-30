import React from "react";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  selected?: boolean;
  /** Optional count bubble (e.g. unread filter count). */
  count?: number;
  /** Material Symbols glyph name shown before the label. */
  leadingIcon?: string;
}

/** Selectable filter / category pill. */
export function Chip(props: ChipProps): JSX.Element;
