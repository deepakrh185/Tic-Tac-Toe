import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

const title = document.querySelectorAll(".board-title");
title.forEach((title) => {
  title.addEventListener("click", () => {
    titleClick(title.dataset.index);
  });
});
function titleClick(i) {
  game.makeMove(i);
  gameView.updateBoard(game);
  game.nextTurn();
}
gameView.updateBoard(game);

const restartGame = document.querySelector(".restart");
restartGame.addEventListener("click", () => restart());

function restart() {
  game = new Game();
  gameView.updateBoard(game);
}
console.log(game.turn);
game.nextTurn();
console.log(game.turn);
console.log(game.board);
