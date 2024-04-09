"use server";

import { cookies } from "next/headers";
import { ROWS } from "./constants";
import { calcNextRow } from "./helpers";

export async function calculateWin(state?: Record<string, number>) {
  const currentStateStr = cookies().get("state");
  const currentState: Record<string, number> =
    state ?? JSON.parse(currentStateStr?.value ?? "{}");

  const keys = Object.keys(currentState);

  for (let i = 0; i < keys.length; i++) {
    const [row, column] = keys[i].split(":").map(Number);
    const currentPlayer = currentState[keys[i]];

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

export async function handleColumnClick(columnIndex: number) {
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

  console.log(cellsPlayedInColumn);

  const rowIndex = calcNextRow(currentState, columnIndex);

  let newLocation = `${rowIndex}:${columnIndex}`;

  if (cellsPlayedInColumn.length >= ROWS) {
    return;
  }

  if (!cellsPlayedInColumn.length) {
    newLocation = `${ROWS - 1}:${columnIndex}`;
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

  const playerWon = await calculateWin(newState);

  if (playerWon) {
    const currentWinsStr = cookies().get("wins");
    const currentWins = JSON.parse(currentWinsStr?.value ?? '{"1": 0, "2": 0}');
    const newWins = {
      ...currentWins,
      [currentPlayer]: currentWins[currentPlayer] + 1,
    };
    cookies().set("wins", JSON.stringify(newWins));
  }

  cookies().set("state", JSON.stringify(newState));
}

export async function startNextRound() {
  cookies().set("state", JSON.stringify({}));
}

export async function restartGame() {
  cookies().set("wins", JSON.stringify({ 1: 0, 2: 0 }));
  cookies().set("state", JSON.stringify({}));
}
