import React from "react";

export interface MobileFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Main button (usually a full-width primary Button). */
  primary?: React.ReactNode;
  /** Optional lower-emphasis button rendered beneath. */
  secondary?: React.ReactNode;
  children?: React.ReactNode;
}

/** Sticky bottom action bar holding 1–2 stacked buttons. */
export function MobileFooter(props: MobileFooterProps): JSX.Element;
