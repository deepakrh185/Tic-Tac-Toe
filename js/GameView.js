export default class GameView {
  constructor() {
    console.log("Game View");
  }

  updateBoard(game) {
    this.updateTurn(game);

    let winningCombinations = game.findWinningCombination();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-title[data-index="${i}"]`);
      tile.textContent = game.board[i];
      tile.classList.remove("tile-winner");
      let tileType = game.board[i] === "X" ? "tile-x" : "tile-y";
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombinations && winningCombinations.includes(i)) {
        tile.classList.add("tile-winner");
        // console.log("wining", winningCombinations);
      }
    }
  }
  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerY = document.querySelector(".player-Y");
    playerX.classList.remove("active");
    playerY.classList.remove("active");

    if (game.turn === "X") {
      playerX.classList.add("active");
    } else {
      playerY.classList.add("active");
    }
  }
}
