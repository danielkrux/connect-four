"use client";

import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { restartGame } from "@/actions";

export default function MenuQuit() {
  const router = useRouter();

  function handleRestart() {
    restartGame();
    router.replace("/");
  }

  return (
    <Button onClick={handleRestart} variant="pink">
      Quit
    </Button>
  );
}
