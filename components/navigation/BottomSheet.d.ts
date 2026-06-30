import React from "react";

export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Position relative to parent instead of viewport — use in demos/mockups. */
  contained?: boolean;
}

/** iOS-style modal sheet — slides up from the bottom with a blurred backdrop. */
export function BottomSheet(props: BottomSheetProps): JSX.Element | null;
