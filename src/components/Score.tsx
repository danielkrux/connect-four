import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ScoreProps = {
  player: "one" | "two";
  score: number;
};

export default function Score({ player, score }: ScoreProps) {
  return (
    <div
      className={clsx(
        "bg-white shadow-container border-3 py-2 rounded-2xl flex w-full",
        { "flex-row-reverse": player === "two" }
      )}
    >
      <Image
        alt="player one"
        src={`/player-${player}.svg`}
        width={60}
        height={60}
        className={clsx({
          "-translate-x-1/2": player === "one",
          "translate-x-1/2": player === "two",
        })}
      />
      <div
        className={clsx("flex flex-col items-center", {
          "-translate-x-[15px]": player === "one",
          "translate-x-[15px]": player === "two",
        })}
      >
        <span className="text-s">Player {player === "one" ? 1 : 2}</span>
        <span className="text-l">{score}</span>
      </div>
    </div>
  );
}
