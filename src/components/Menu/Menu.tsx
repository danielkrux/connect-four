import React from "react";
import Button from "../Button";
import MenuRestart from "./MenuRestart";
import MenuQuit from "./MenuQuit";

export default function Menu() {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-20" />
      <div className="absolute bg-purple border-3 rounded-lg top-1/2 left-0 right-0 -translate-y-1/2 z-30 flex flex-col items-center p-10 gap-6 mx-4">
        <h1 className="text-l uppercase">paused</h1>
        <Button href="/game" variant="white">
          Resume
        </Button>
        <MenuRestart />
        <MenuQuit />
      </div>
    </>
  );
}
