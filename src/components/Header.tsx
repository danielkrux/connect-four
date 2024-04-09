import React from "react";
import Link from "next/link";

import Logo from "./Logo";
import RestartButton from "./RestartButton";

export default function Header() {
  return (
    <div className="flex items-center justify-between lg:justify-evenly self-stretch mx-4 my-8">
      <Link
        href="/game?menu=true"
        className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase hover:bg-pink transition-colors duration-300 ease-in-out"
      >
        Menu
      </Link>
      <Logo className="absolute left-1/2 -translate-x-1/2" />
      <RestartButton>Replay</RestartButton>
    </div>
  );
}
