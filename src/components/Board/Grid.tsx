"use client";

import React, { useOptimistic, useState, useTransition } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { handleColumnClick as updateState } from "@/actions";
import { COLUMNS, ROWS } from "@/constants";
import { calcNextRow } from "@/helpers";

import Indicator from "./Indicator";

const COLS: number[] = Array(COLUMNS).fill(0);

export default function Grid({
  state,
  currentPlayer,
}: {
  state: Record<string, number>;
  currentPlayer: number;
}) {
  const [currentHover, setCurrentHover] = useState<number | null>(null);

  const [_, startTransition] = useTransition();
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    (currentState, optimisticValue: Record<string, number>) => {
      return { ...currentState, ...optimisticValue };
    }
  );

  const stateArr = Object.entries(optimisticState);

  const gridRef = React.useRef<HTMLDivElement>(null);
  const gridHeight = gridRef.current?.clientHeight ?? 0;
  const gridWidth = gridRef.current?.clientWidth ?? 0;

  async function handleColumnClick(colIndex: number) {
    const rowIndex = calcNextRow(optimisticState, colIndex);
    const key = `${rowIndex}:${colIndex}`;
    const optimisticValues = Object.values(optimisticState);
    const player =
      optimisticValues?.at(optimisticValues.length - 1) === 1 ? 2 : 1;
    const cellsPlayedInColumn = stateArr.filter((x) =>
      x[0].includes(`:${colIndex}`)
    ).length;

    startTransition(() => {
      if (cellsPlayedInColumn >= ROWS) return;
      addOptimistic({ [key]: player });
      updateState(colIndex);
    });
  }

  return (
    <>
      <div
        ref={gridRef}
        className="absolute flex flex-row h-[87%] w-[95%] mt-[2%] gap-[3%]"
      >
        <Indicator
          currentPlayer={currentPlayer}
          parentWidth={gridWidth}
          currentIndexHover={currentHover}
        />
        {COLS.map((_, colIndex) => (
          <button
            onMouseOver={() => setCurrentHover(colIndex)}
            onClick={() => handleColumnClick(colIndex)}
            key={`col-${colIndex}`}
            className="flex flex-grow z-20 flex-col relative cursor-pointer"
          />
        ))}
      </div>
      <div className="absolute flex flex-row h-[87%] w-[95%] mt-[2%] gap-[3%]">
        {COLS.map((_, colIndex) => (
          <div
            onClick={() => handleColumnClick(colIndex)}
            key={`col-${colIndex}`}
            className="flex flex-col-reverse gap-[3.5%] w-full cursor-pointer"
          >
            {stateArr.map(([key, value]) => {
              const [row, col] = key.split(":").map(Number);
              if (col !== colIndex) return;

              const numberInCol = stateArr.filter((x) =>
                x[0].includes(`:${colIndex}`)
              ).length;

              return (
                <motion.div
                  initial={{
                    translateY: -gridHeight + (gridHeight / 6) * numberInCol,
                  }}
                  animate={{
                    translateY: 0,
                  }}
                  transition={{ duration: 0.25 }}
                  key={`${row}:${col}`}
                  className={clsx("w-full aspect-square rounded-full", {
                    "bg-pink": value === 1,
                    "bg-yellow": value === 2,
                  })}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
