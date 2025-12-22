/*
51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Example 2:
Input: n = 1
Output: [["Q"]]

*/

function solveNQueens(n) {
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
      result.push(transform(board));
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

function transform(board) {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }
  return newBoard;
}

// console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
