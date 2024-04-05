"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { restartGame } from "@/actions";

import Button from "../Button";

export default function MenuQuit() {
  const router = useRouter();

  async function handleRestart() {
    await restartGame();
    router.replace("/");
  }

  return (
    <Button onClick={handleRestart} variant="pink">
      Quit
    </Button>
  );
}
