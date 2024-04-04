"use client";

import React from "react";
import Logo from "./Logo";
import { restartGame } from "@/actions";

export default function Header() {
  return (
    <div className="flex items-center justify-between self-stretch mx-1 my-12">
      <button className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase">
        Menu
      </button>
      <Logo className="absolute left-1/2 -translate-x-1/2" />
      <button
        onClick={() => {
          try {
            restartGame();
          } catch (e) {
            console.error(e);
          }
        }}
        className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase"
      >
        Restart
      </button>
    </div>
  );
}
