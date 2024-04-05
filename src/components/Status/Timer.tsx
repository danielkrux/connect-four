"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useCountdown } from "usehooks-ts";

export default function Timer({ currentPlayer }: { currentPlayer: number }) {
  const searchParams = useSearchParams();

  const [count, { startCountdown, resetCountdown, stopCountdown }] =
    useCountdown({ countStart: 15 });

  const paused = searchParams.get("menu") === "true";

  useEffect(() => {
    if (paused) {
      stopCountdown();
    } else {
      startCountdown();
    }
  }, [paused, stopCountdown, startCountdown]);

  useEffect(() => {
    resetCountdown();
    startCountdown();
  }, [currentPlayer, resetCountdown, startCountdown, stopCountdown]);

  return <span className="text-l text-white">{count}s</span>;
}
