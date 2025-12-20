/*
79. Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

*/

function exists(board, word) {
  let r = board.length;
  let c = board[0].length;
  let result = false;

  function backtracking(i, j, nextIndex) {
    if (nextIndex === word.length) {
      result = true;
    }
    let original = board[i][j];
    board[i][j] = "#";

    if (i < r - 1 && word[nextIndex] === board[i + 1][j]) {
      backtracking(i + 1, j, nextIndex + 1);
    }
    if (i > 0 && word[nextIndex] === board[i - 1][j]) {
      backtracking(i - 1, j, nextIndex + 1);
    }
    if (j < c - 1 && word[nextIndex] === board[i][j + 1]) {
      backtracking(i, j + 1, nextIndex + 1);
    }
    if (j > 0 && word[nextIndex] === board[i][j - 1]) {
      backtracking(i, j - 1, nextIndex + 1);
    }

    board[i][j] = original;
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (word[0] === board[i][j]) {
        backtracking(i, j, 1);
      }
    }
  }

  return result;
}

// console.log(
//   exists(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCCED"
//   )
// );
