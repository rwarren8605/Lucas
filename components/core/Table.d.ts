import React from "react";

export interface TableColumn {
  label: string;
  key: string;
  align?: "left" | "center" | "right";
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: (string | TableColumn)[];
  rows: Record<string, React.ReactNode>[];
  /** Alternate row backgrounds. Default false. */
  striped?: boolean;
}

/** Data table — sticky header, zebra option, full LUCAS token theming. */
export function Table(props: TableProps): JSX.Element;
