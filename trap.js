class Trap {
  constructor(game, speed) {
    this.game = game;
    this.x = Math.floor(Math.random(5) * 450 + 500);
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.speed = speed;
  }

  left() {
    return this.x + this.width - 10;
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
    this.img.src = "docs/assets/imgs/trap.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
