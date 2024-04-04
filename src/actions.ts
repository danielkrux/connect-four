"use server";

import { cookies } from "next/headers";

export async function handleCellPress(rowIndex: number, columnIndex: number) {
  const currentStateStr = cookies().get("state");
  const currentState = JSON.parse(currentStateStr?.value ?? "{}");
  const values = Object.values(currentState);
  const currentPlayer = values.at(values.length - 1) === 1 ? 2 : 1;
  const newState = {
    ...currentState,
    [`${rowIndex}:${columnIndex}`]: currentPlayer,
  };
  cookies().set("state", JSON.stringify(newState));
}

export async function restartGame() {
  cookies().set("state", JSON.stringify({}));
}
