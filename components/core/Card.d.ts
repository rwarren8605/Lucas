import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** default = white elevated, recessed = gray, brand = yellow hero, dark = near-black. */
  tone?: "default" | "recessed" | "brand" | "dark";
  padding?: number | string;
  elevated?: boolean;
}

/** Rounded, soft-shadow container — the base surface for LUCAS content. */
export function Card(props: CardProps): JSX.Element;
