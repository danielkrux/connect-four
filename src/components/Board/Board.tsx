import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";

import { Cell } from "../Cell";
import { COLUMNS, ROWS } from "@/constants";

const GRID: number[][] = Array(ROWS).fill(Array(COLUMNS).fill(0));

export type BoardProps = {
  className?: string;
};

const Board = ({ className }: BoardProps) => {
  const currentStateCookie = cookies().get("state");
  const currentState = JSON.parse(currentStateCookie?.value ?? "{}");

  const cls = clsx(
    "bg-white shadow-container border-3 flex flex-col gap-2 p-2 pb-4 md:p-4 md:pb-6 md:gap-4  lg:gap-6 rounded-lg",
    className
  );

  return (
    <div className={cls}>
      {GRID.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex justify-between gap-2">
          {row.map((c, cellIndex) => (
            <Cell
              key={`${rowIndex} ${cellIndex}`}
              cellIndex={cellIndex}
              rowIndex={rowIndex}
              playedBy={currentState[`${rowIndex}:${cellIndex}`]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
