import React from "react";
import clsx from "clsx";

import { Cell } from "../Cell";

const ROWS = 6;
const COLUMNS = 7;
const GRID: number[][] = Array(COLUMNS).fill(Array(ROWS).fill(0));

export type BoardProps = {
  className?: string;
};

const Board = ({ className }: BoardProps) => {
  const cls = clsx(
    "bg-white shadow-container border-3 p-2 flex pb-5 self-stretch gap-1 rounded-2xl",
    className
  );

  return (
    <div className={cls}>
      {GRID.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex flex-col gap-1 flex-grow">
          {row.map((c, cellIndex) => (
            <Cell
              key={`${rowIndex} ${cellIndex}`}
              cellIndex={cellIndex}
              rowIndex={rowIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
