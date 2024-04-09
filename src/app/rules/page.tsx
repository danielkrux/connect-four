import Link from "next/link";
import React from "react";
import IconCheck from "../../../public/icon-check.svg";

export default function Rules() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 ">
      <div className="bg-white border-3 rounded-lg p-7 max-w-[480px] shadow-container">
        <h1 className="text-l uppercase text-center mb-7">Rules</h1>
        <h2 className="text-m text-purple mb-4 uppercase">Objective</h2>
        <p className="mb-7">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h2 className="text-m text-purple mb-4 uppercase">How To Play</h2>
        <ol className="*:mb-[10px] *:ml-4 list-decimal">
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second on the next game.
          </li>
        </ol>
        <Link href="/" className="w-16 h-16 flex ml-auto mr-auto -mb-14">
          <IconCheck />
        </Link>
      </div>
    </div>
  );
}
