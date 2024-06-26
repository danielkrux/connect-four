import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";

import BoardBlack from "../../../public/board-black.svg";
import BoardWhite from "../../../public/board-white.svg";
import Grid from "./Grid";
import { calculateWin, getCurrentPlayer } from "@/actions";

export type BoardProps = {
  className?: string;
};

const Board = async ({ className }: BoardProps) => {
  const currentStateCookie = cookies().get("state");
  const currentState: Record<string, number> = JSON.parse(
    currentStateCookie?.value ?? "{}"
  );
  const currentPlayer = await getCurrentPlayer();
  const hasWin = await calculateWin(currentState);

  return (
    <div
      className={clsx(
        "relative flex justify-center mt-14 [max-width:800px]",
        className
      )}
    >
      <BoardBlack className="w-full" />
      <Grid
        state={currentState}
        currentPlayer={currentPlayer}
        hasWin={Boolean(hasWin)}
      />
      <BoardWhite className="absolute w-full" />
    </div>
  );
};

export default Board;
