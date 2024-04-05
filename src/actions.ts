"use server";

import { cookies } from "next/headers";
import { ROWS } from "./constants";

export async function calculateWin() {
  const currentStateStr = cookies().get("state");
  const currentState: Record<string, number> = JSON.parse(
    currentStateStr?.value ?? "{}"
  );

  const keys = Object.keys(currentState);

  for (let i = 0; i < keys.length; i++) {
    const [row, column] = keys[i].split(":").map(Number);
    const currentPlayer = currentState[keys[i]];

    if (currentPlayer === 0) {
      continue;
    }

    const horizontalWin = Array.from({ length: 4 }).every((_, index) => {
      return currentState[`${row}:${column + index}`] === currentPlayer;
    });

    const verticalWin = Array.from({ length: 4 }).every((_, index) => {
      return currentState[`${row + index}:${column}`] === currentPlayer;
    });

    const diagonalWin = Array.from({ length: 4 }).every((_, index) => {
      return currentState[`${row - index}:${column + index}`] === currentPlayer;
    });

    const diagonalWinLeft = Array.from({ length: 4 }).every((_, index) => {
      return currentState[`${row - index}:${column - index}`] === currentPlayer;
    });

    if (horizontalWin || verticalWin || diagonalWin || diagonalWinLeft) {
      return currentPlayer;
    }
  }

  return;
}

export async function getCurrentPlayer() {
  const currentStateStr = cookies().get("state");
  const currentState: Record<string, number> = JSON.parse(
    currentStateStr?.value ?? "{}"
  );

  const values = Object.values(currentState);
  return values?.at(values.length - 1) === 1 ? 2 : 1;
}

export async function handleCellPress(rowIndex: number, columnIndex: number) {
  const currentStateStr = cookies().get("state");
  const currentState: Record<string, number> = JSON.parse(
    currentStateStr?.value ?? "{}"
  );

  const values = Object.values(currentState);
  const locations = Object.keys(currentState);

  const currentPlayer = values?.at(values.length - 1) === 1 ? 2 : 1;

  const cellsPlayedInColumn = locations?.filter((loc) =>
    loc.includes(`:${columnIndex}`)
  );

  let newLocation = `${rowIndex}:${columnIndex}`;

  if (cellsPlayedInColumn.length > ROWS) {
    return;
  }

  if (!cellsPlayedInColumn.length) {
    newLocation = `${ROWS}:${columnIndex}`;
  } else {
    const lastCellPlayedInColumn =
      cellsPlayedInColumn[cellsPlayedInColumn.length - 1];
    const [lastRowPlayed] = lastCellPlayedInColumn.split(":");
    newLocation = `${Number(lastRowPlayed) - 1}:${columnIndex}`;
  }

  const newState = {
    ...currentState,
    [newLocation]: currentPlayer,
  };

  if (await calculateWin()) {
    return;
  }

  cookies().set("state", JSON.stringify(newState));
}

export async function restartGame() {
  cookies().set("state", JSON.stringify({}));
}
