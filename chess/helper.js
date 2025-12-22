export function transform(board) {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }
  return newBoard;
}
