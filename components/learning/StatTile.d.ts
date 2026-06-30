import React from "react";

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  align?: "center" | "start";
}

export interface StatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { label: React.ReactNode; value: React.ReactNode }[];
}

/** Single label/value stat. */
export function StatTile(props: StatTileProps): JSX.Element;
/** Row of StatTiles split by hairline dividers (results scoreboard). */
export function StatRow(props: StatRowProps): JSX.Element;
