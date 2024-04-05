import clsx from "clsx";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

type ScoreProps = {
  player: "one" | "two";
};

export default function Score({ player }: ScoreProps) {
  const currentWinsStr = cookies().get("wins");
  const currentWins = JSON.parse(currentWinsStr?.value ?? '{"1": 0, "2": 0}');

  const score = currentWins[player === "one" ? 1 : 2];

  return (
    <div
      className={clsx(
        "bg-white shadow-container border-3 py-2 rounded flex w-full",
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
