import React from "react";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Material Symbol Rounded glyph name. Default: "inbox". */
  icon?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Optional action slot — place a Button here. */
  action?: React.ReactNode;
}

/** Zero-data placeholder — icon badge, title, body, and action slot. */
export function EmptyState(props: EmptyStateProps): JSX.Element;
