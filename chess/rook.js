import { transform } from "./helper";

function NRooks(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(".");
    }
    board.push(temp);
  }

  let result = [];

  function backtracking(board, row, colSet) {
    if (row === n) {
      result.push(transform(board));
    }
    for (let col = 0; col < n; col++) {
      if (colSet.has(col)) {
        continue;
      }

      board[row][col] = "H";
      colSet.add(col);

      backtracking(board, row + 1, colSet);

      board[row][col] = ".";
      colSet.delete(col);
    }
  }

  backtracking(board, 0, new Set());

  return result;
}

// console.log(NRooks(4));
