let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start-button");

console.log(startScreen);

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    startButton.style.display = "none"; // posso mudar de backgrounds por ex
    startGame();
  };

  document.getElementById("restart").onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game();
    game.start();
    console.log(game);
  }
};
