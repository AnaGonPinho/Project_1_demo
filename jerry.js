class Jerry {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.jumping = false;
    this.maxHigh = 50;
    this.vy = 30;
    this.vx = 10;
    this.gravity = 2.5;
  }

  draw() {
    this.img.src = "./docs/imgs/jerry.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  jump() {
    this.jumping = true;
    while (this.y > this.maxHigh) {
      this.y -= this.vy;
    }
  }

  stopJumping() {
    if (this.y < 380) {
      this.y += this.gravity;
    }
  }

  moveLeft() {
    this.x -= 10 + 10;
  }
  moveRight() {
    this.x += 20 + 10;
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

  crashWith(enemy) {
    return !(
      this.bottom() < enemy.top() ||
      this.top() > enemy.bottom() ||
      this.right() < enemy.left() ||
      this.left() > enemy.right()
    );
  }
}
