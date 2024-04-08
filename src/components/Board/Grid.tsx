"use client";

import React from "react";
import { motion } from "framer-motion";

import { handleColumnClick } from "@/actions";
import clsx from "clsx";
import Indicator from "./Indicator";

const COLS: number[] = Array(7).fill(0);

export default function Grid({
  state,
  currentPlayer,
}: {
  state: Record<string, number>;
  currentPlayer: number;
}) {
  const [currentHover, setCurrentHover] = React.useState<number | null>(null);
  const stateArr = Object.entries(state);

  const gridRef = React.useRef<HTMLDivElement>(null);
  const gridHeight = gridRef.current?.clientHeight ?? 0;
  const gridWidth = gridRef.current?.clientWidth ?? 0;

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
            className="flex flex-grow z-50 flex-col relative cursor-pointer"
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
