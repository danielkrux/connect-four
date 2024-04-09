"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { COLUMNS } from "@/constants";

export default function Indicator({
  currentPlayer,
  parentWidth,
  currentIndexHover,
}: {
  currentPlayer: number;
  parentWidth: number;
  currentIndexHover: number | null;
}) {
  const columnWidth = parentWidth / COLUMNS;
  const offset = columnWidth / 2 - 24;

  return (
    <motion.div
      className={clsx(
        "absolute -top-[11%] rounded-full size-12 border-3 invisible lg:visible",
        {
          "bg-yellow": currentPlayer === 2,
          "bg-pink": currentPlayer === 1,
        }
      )}
      animate={{
        translateX: currentIndexHover
          ? currentIndexHover * columnWidth + offset
          : offset,
      }}
    />
  );
}
