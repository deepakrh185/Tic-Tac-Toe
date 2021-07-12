export default class GameView {
  constructor() {
    console.log("Game View");
  }
  updateBoard(game) {
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-title[data-index="${i}"]`);
      tile.textContent = game.board[i];
    }
  }
  updateTurn(game) {
    playerX = document.querySelector(".player-X");
    playerY = document.querySelector(".player-Y");
  }
}
