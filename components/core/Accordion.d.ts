import React from "react";

export interface AccordionItem {
  /** Header label. */
  title?: string;
  label?: string;
  /** Expanded content. */
  content?: React.ReactNode;
  children?: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow multiple sections open simultaneously. Default false. */
  multiple?: boolean;
}

/** Expandable accordion — single or multi-open. */
export function Accordion(props: AccordionProps): JSX.Element;
