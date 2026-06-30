import React from "react";

export interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  onBack?: () => void;
  /** Right-aligned action(s), e.g. an IconButton. */
  trailing?: React.ReactNode;
  tone?: "default" | "brand";
}

/** App top bar: back chevron + title + trailing action. */
export function HeaderNav(props: HeaderNavProps): JSX.Element;
