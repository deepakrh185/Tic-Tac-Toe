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
    const winningCombinations = this.findWinningCombination();

    if (!winningCombinations) {
      if (this.board[i]) {
        return;
      }

      this.board[i] = this.turn; // X or O
      const winningCombinations = this.findWinningCombination();
      document.getElementById("winning");
      console.log("winning->>>", winningCombinations);
      if (this.endGame()) {
        return true;
      }
      if (!winningCombinations) {
        this.nextTurn();
      }
    }
  }

  findWinningCombination() {
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
      const [a, b, c] = combination;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return combination;
      }
    }
    return null;
  }

  endGame() {
    let winningCombinations = this.findWinningCombination();
    console.log("end", winningCombinations);
    document.getElementById("winning");
    if (winningCombinations) {
  document.getElementById("winning").style.visibility = "visible";

      document.querySelector("[winning]").textContent = `${
        this.turn === "X" ? "X" : "Y"
      } Wins`;
    } else false;
    // if (winningCombinations) {
    //   return true;
    // } else return false;
  }
}
