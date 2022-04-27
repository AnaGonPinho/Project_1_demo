let startScreen = document.getElementById("start-screen");

console.log(startScreen);

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none"; // posso mudar de backgrounds por ex
    startGame();
  };

  function startGame() {
    const game = new Game();
    game.start();
    console.log(game);
  }
};
