"use client";

import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { restartGame } from "@/actions";

export default function MenuRestart() {
  const router = useRouter();

  function handleRestart() {
    restartGame();
    router.back();
  }

  return (
    <Button onClick={handleRestart} variant="white">
      Restart
    </Button>
  );
}
