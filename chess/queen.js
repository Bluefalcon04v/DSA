import { transform } from "./helper";

function NQueens(n) {
  let board = [];

  for (let i = 0; i < n; i++) {
    let tempBoard = [];
    for (let j = 0; j < n; j++) {
      tempBoard.push(".");
    }
    board.push(tempBoard);
  }

  let result = [];
  function backTracking(board, row, colSet, diagSet, antiDiagSet) {
    if (row === n) {
      result = transform(board);
    }

    for (let col = 0; col < n; col++) {
      // to avoid the queen attacking each other
      if (
        colSet.has(col) ||
        diagSet.has(row - col) ||
        antiDiagSet.has(row + col)
      ) {
        continue;
      }

      board[row][col] = "Q";
      colSet.add(col);
      diagSet.add(row - col);
      antiDiagSet.add(row + col);

      backTracking(board, row + 1, colSet, diagSet, antiDiagSet);

      // backTracking
      board[row][col] = ".";
      colSet.delete(col);
      diagSet.delete(row - col);
      antiDiagSet.delete(row + col);
    }
  }

  backTracking(board, 0, new Set(), new Set(), new Set());
  return result;
}


// console.log(NQueens(4));
