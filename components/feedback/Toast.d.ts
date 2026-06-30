import React from "react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  status?: "default" | "success" | "error";
  icon?: string;
  onDismiss?: () => void;
}

/** Transient dark notification with semantic accent icon. */
export function Toast(props: ToastProps): JSX.Element;
