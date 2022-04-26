class Trap {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 100 + 500);
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width - 10;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  draw() {
    this.img.src = "./docs/imgs/armadilha.PNG";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
