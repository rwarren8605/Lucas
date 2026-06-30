import React from "react";

export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Called when the clear (×) button is pressed. Falls back to onChange(""). */
  onClear?: () => void;
  disabled?: boolean;
}

/** Pill-shaped search input with leading icon, focus ring, and clear button. */
export function SearchBar(props: SearchBarProps): JSX.Element;
