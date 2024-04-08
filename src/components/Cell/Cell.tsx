import React from "react";
import clsx from "clsx";

type CellProps = {
  rowIndex: number;
  cellIndex: number;
  playedBy?: number;
};

export function Cell({ rowIndex, cellIndex, playedBy }: CellProps) {
  const cls = clsx(
    "rounded-full  w-full md:max-w-[70px] lg:max-w-[90px] aspect-square relative overflow-hidden before:bg-black before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 after:absolute after:rounded-full after:left-0 after:right-0 after:top-0 after:bottom-0 after:z-10 after:translate-y-3 ",
    {
      "after:left-1 after:right-1 after:top-1 after:bottom-1 after:translate-y-0":
        playedBy,
      "after:bg-pink": playedBy === 1,
      "after:bg-yellow": playedBy === 2,
      "after:bg-purple ": !playedBy,
    }
  );

  return (
    <button type="submit" name={`${rowIndex}-${cellIndex}`} className={cls} />
  );
}
