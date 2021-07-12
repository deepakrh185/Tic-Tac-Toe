export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }
  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }
  makeMove(i) {
    if (this.endGame()) {
      return;
    }
    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn; // X or O
    const winning = this.findWinningCombinations();
    console.log("winning", winning);
  }
  findWinningCombinations() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let combination of winningCombinations) {
      console.log(combination);
      const [a, b, c] = combination;
      console.log(this.board);
      console.log("value of a", this.board[a]);
      if (
        this.board[a] &&
        this.board[a] == this.board[b] &&
        this.board[a] == this.board[c]
      ) {
        return combination;
      }
    }

    return null;
  }
  endGame() {
    const winning = this.findWinningCombinations();
    if (winning) {
      return true;
    } else return false;
  }
}
