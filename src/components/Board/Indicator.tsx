"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Indicator({
  currentPlayer,
  parentWidth,
  currentIndexHover,
}: {
  currentPlayer: number;
  parentWidth: number;
  currentIndexHover: number | null;
}) {
  const columnWidth = parentWidth / 7;
  const offset = columnWidth / 2 - 24;

  return (
    <motion.div
      className={clsx("absolute -top-20 rounded-full h-12 w-12 border-3", {
        "bg-yellow": currentPlayer === 2,
        "bg-pink": currentPlayer === 1,
      })}
      animate={{
        translateX: currentIndexHover
          ? currentIndexHover * columnWidth + offset
          : offset,
      }}
    />
  );
}
