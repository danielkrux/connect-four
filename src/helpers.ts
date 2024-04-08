import { ROWS } from "./constants";

export function calcNextRow(
  currentState: Record<string, number>,
  colIndex: number
) {
  const stateArr = Object.keys(currentState);
  const cellsPlayedInCol = stateArr.filter((x) => x.includes(`:${colIndex}`));
  const rowIndex = ROWS - cellsPlayedInCol.length - 1;
  return rowIndex;
}
