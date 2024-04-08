"use client";

import React from "react";
import { motion } from "framer-motion";

import { handleColumnClick } from "@/actions";
import clsx from "clsx";

const COLS: number[] = Array(7).fill(0);

export default function Grid({ state }: { state: Record<string, number> }) {
  const stateArr = Object.entries(state);

  const gridRef = React.useRef<HTMLDivElement>(null);
  const gridHeight = gridRef.current?.clientHeight ?? 0;

  return (
    <>
      <div
        ref={gridRef}
        className="absolute flex flex-row h-[87%] w-[95%] mt-[2%] gap-[3%]"
      >
        {COLS.map((_, colIndex) => (
          <button
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
            {stateArr.map(([key, value], index) => {
              const [row, col] = key.split(":").map(Number);
              if (col !== colIndex) return;

              return (
                <motion.div
                  initial={{
                    translateY: -gridHeight + (gridHeight / 6) * index,
                  }}
                  animate={{ translateY: 0 }}
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
