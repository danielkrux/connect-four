"use client";

import { restartGame } from "@/actions";
import React from "react";

export default function RestartButton({ children }: { children?: string }) {
  return (
    <button
      onClick={() => restartGame()}
      className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase"
    >
      {children ?? "Restart"}
    </button>
  );
}
