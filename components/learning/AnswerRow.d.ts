import React from "react";

export interface AnswerRowProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Letter token (A/B/C/D). Replaced by a check/x icon in correct/incorrect. */
  letter?: string;
  children?: React.ReactNode;
  state?: "default" | "selected" | "correct" | "incorrect";
  onClick?: () => void;
}

/** Single multiple-choice answer option for the quiz module. */
export function AnswerRow(props: AnswerRowProps): JSX.Element;
