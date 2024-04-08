"use client";

import { startNextRound } from "@/actions";
import React from "react";

export default function RestartButton({ children }: { children?: string }) {
  return (
    <button
      onClick={() => startNextRound()}
      className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase hover:bg-pink transition-colors duration-300 ease-in-out"
    >
      {children ?? "Restart"}
    </button>
  );
}
