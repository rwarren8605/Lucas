import React from "react";

export interface TabItem { label: string; value: string; }

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: (string | TabItem)[];
  value?: string;
  onChange?: (value: string) => void;
}

/** Underline tab bar for in-screen section switching. */
export function Tabs(props: TabsProps): JSX.Element;
