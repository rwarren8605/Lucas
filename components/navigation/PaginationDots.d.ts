import React from "react";

export interface PaginationDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  active?: number;
  onDotClick?: (index: number) => void;
}

/** Carousel / onboarding dots; active dot becomes a yellow pill. */
export function PaginationDots(props: PaginationDotsProps): JSX.Element;
