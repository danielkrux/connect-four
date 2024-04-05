"use client";

import React from "react";
import { handleCellPress } from "@/actions";
import clsx from "clsx";

type CellProps = {
  rowIndex: number;
  cellIndex: number;
  playedBy?: number;
};

export function Cell({ rowIndex, cellIndex, playedBy }: CellProps) {
  const cls = clsx(
    "rounded-full border-4 w-full md:max-w-[70px] lg:max-w-[90px] aspect-square relative overflow-hidden",
    {
      "bg-pink": playedBy === 1,
      "bg-yellow": playedBy === 2,
      "bg-purple": !playedBy,
    }
  );

  return (
    <button
      onClick={() => handleCellPress(rowIndex, cellIndex)}
      className={cls}
    />
  );
}
