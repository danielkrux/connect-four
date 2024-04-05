import React from "react";
import MenuRestart from "./MenuRestart";
import MenuQuit from "./MenuQuit";
import Button from "../Button";

export default function Menu() {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-20" />
      <div className="absolute bg-purple border-3 rounded-lg top-1/2 left-0 right-0 -translate-y-1/2 z-30 flex flex-col items-center p-10 gap-6 mx-4 shadow-container md:max-w-screen-sm md:ml-auto md:mr-auto">
        <h1 className="text-l uppercase md:pb-6">paused</h1>
        <Button href="/game" variant="white">
          Resume
        </Button>
        <MenuRestart />
        <MenuQuit />
      </div>
    </>
  );
}
