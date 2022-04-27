class Cheese {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random(10) * 500 + 100);
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  draw() {
    this.img.src = "./docs/assets/imgs/cheese.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
