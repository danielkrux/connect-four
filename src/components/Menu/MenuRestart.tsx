"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { restartGame } from "@/actions";
import Button from "../Button";

export default function MenuRestart() {
  const router = useRouter();

  async function handleRestart() {
    await restartGame();
    router.back();
  }

  return (
    <Button onClick={handleRestart} variant="white">
      Restart game
    </Button>
  );
}
