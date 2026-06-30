import React from "react";

/**
 * One row in the HBE module list.
 * @startingPoint section="Learning" subtitle="Module list row with status" viewport="700x120"
 */
export interface ModuleItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: React.ReactNode;
  /** Sub-line, e.g. "Module 1 · 12 Min". */
  meta?: React.ReactNode;
  status?: "completed" | "active" | "locked";
  /** Trailing element, usually a <StatusBadge>. */
  badge?: React.ReactNode;
  onClick?: () => void;
}

export function ModuleItem(props: ModuleItemProps): JSX.Element;
