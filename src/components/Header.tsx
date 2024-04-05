import React from "react";
import Logo from "./Logo";
import RestartButton from "./RestartButton";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between self-stretch mx-1 my-12">
      <Link
        href="/game?menu=true"
        className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase"
      >
        Menu
      </Link>
      <Logo className="absolute left-1/2 -translate-x-1/2" />
      <RestartButton />
    </div>
  );
}
