export default class GameView {
  constructor() {
    console.log("Game View");
  }
  updateBoard(game) {
    this.updateTurn(game);
    let winningCombinations = game.findWinningCombinations();
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-title[data-index="${i}"]`);
      tile.textContent = game.board[i];
      let tileType = game.board[i] == "X" ? "tile-x" : "tile-y";
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombinations && winningCombinations.includes(i)) {
        console.log(
          "winningCombinations.includes(i)",
          winningCombinations.includes(i)
        );
        tile.classList.add("tile-winner");
      }
    }
  }
  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerY = document.querySelector(".player-Y");
    playerX.classList.remove("active");
    playerY.classList.remove("active");

    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerY.classList.add("active");
    }
    if (game.endGame()) {
      return;
    }
  }
}
