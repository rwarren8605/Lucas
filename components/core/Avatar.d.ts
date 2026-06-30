import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. Falls back to initials if not provided. */
  src?: string;
  /** Full name — up to 2 initials are derived and displayed. */
  name?: string;
  /** Diameter in px. Default 40. */
  size?: number;
  /** Corner style. Default "circle". */
  shape?: "circle" | "rounded" | "square";
  /** Optional status indicator dot. */
  indicator?: "online" | "offline" | "busy" | "away";
}

/** User avatar — image or initials, with optional status indicator. */
export function Avatar(props: AvatarProps): JSX.Element;
