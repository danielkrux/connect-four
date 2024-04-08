import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";

import BoardBlack from "../../../public/board-black.svg";
import BoardWhite from "../../../public/board-white.svg";
import Grid from "./Grid";
import { COLUMNS, ROWS } from "@/constants";

export type BoardProps = {
  className?: string;
};

const GRID: number[][] = Array(ROWS).fill(Array(COLUMNS).fill(0));

const Board = ({ className }: BoardProps) => {
  const currentStateCookie = cookies().get("state");
  const currentState: Record<string, number> = JSON.parse(
    currentStateCookie?.value ?? "{}"
  );

  const cls = clsx(
    "bg-white relative shadow-container border-3 flex flex-col gap-2 p-2 pb-4 md:p-4 md:pb-6 md:gap-4  lg:gap-6 rounded-lg",
    className
  );

  return (
    <div className="relative flex justify-center">
      <BoardBlack className="w-full" />
      <Grid state={currentState} />
      <BoardWhite className="absolute w-full" />
    </div>
  );
};

export default Board;
