import React from "react";

type CellProps = {
  rowIndex: number;
  cellIndex: number;
};

export function Cell({ rowIndex, cellIndex }: CellProps) {
  return (
    <div className="rounded-full bg-purple border-4 flex aspect-square relative overflow-hidden" />
  );
}
