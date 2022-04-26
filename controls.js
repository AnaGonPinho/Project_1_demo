class Controls {
  constructor(game) {
    this.game = game;
    this.jerry = this.game.jerry;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          e.preventDefault();
          this.jerry.jump();
          break;

        case "ArrowLeft":
          if (this.jerry.x > 0) {
            this.jerry.moveLeft();
          }
          break;
        case "ArrowRight":
          if (this.jerry.x + this.jerry.width < 1000) {
            this.jerry.moveRight();
          }

          break;
      }
    });
  }
}
