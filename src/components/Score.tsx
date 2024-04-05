import clsx from "clsx";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

type ScoreProps = {
  className?: string;
  player: "one" | "two";
};

export default function Score({ player, className }: ScoreProps) {
  const currentWinsStr = cookies().get("wins");
  const currentWins = JSON.parse(currentWinsStr?.value ?? '{"1": 0, "2": 0}');

  const score = currentWins[player === "one" ? 1 : 2];

  return (
    <div
      className={clsx(
        className,
        "bg-white relative shadow-container border-3 py-2 rounded items-center justify-stretch flex w-full",
        { "flex-row-reverse": player === "two" }
      )}
    >
      <Image
        alt="player one"
        src={`/player-${player}.svg`}
        width={60}
        height={60}
        className={clsx("absolute lg:-top-1/2 lg:translate-y-1/2", {
          "-translate-x-1/2 lg:left-1/2 ": player === "one",
          "translate-x-1/2 lg:right-1/2": player === "two",
        })}
      />
      <div
        className={clsx(
          "flex flex-col md:flex-row lg:flex-col items-center ml-auto mr-auto md:gap-6 lg:gap-0 lg:pt-8",
          {
            "md:flex-row-reverse": player === "two",
          }
        )}
      >
        <span className="text-s text-center">
          Player {player === "one" ? 1 : 2}
        </span>
        <span className="text-l md:min-w-24 text-center">{score}</span>
      </div>
    </div>
  );
}
