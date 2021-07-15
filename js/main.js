import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => restart());

const title = document.querySelectorAll(".board-title");
title.forEach((title) => {
  title.addEventListener("click", () => {
    titleClick(title.dataset.index), { once: true };
  });
});

function titleClick(i) {
  game.makeMove(i);
  gameView.updateBoard(game);
}
function restart() {
  game = new Game();
  gameView.updateBoard(game);
  document.getElementById("winning").style.visibility = "hidden";
}
gameView.updateBoard(game);
