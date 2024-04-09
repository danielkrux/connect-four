"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { restartGame } from "@/actions";

import Button from "../Button";

export default function MenuQuit() {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("keydown", handleEscPress);

    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };

    function handleEscPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        router.replace("/game");
      }
    }
  }, [router]);

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
