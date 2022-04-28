let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start-button");

console.log(startScreen);

window.onload = () => {
  const startMusic = new Audio("./docs/assets/sounds/intro.webm");
  startMusic.play();

  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    startButton.style.display = "none"; // posso mudar de backgrounds por ex
    startGame();
  };

  function startGame() {
    const game = new Game();
    game.start();
    console.log(game);
  }
};
