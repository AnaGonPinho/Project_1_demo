class Enemy {
  constructor(game, speed) {
    this.game = game;
    this.x = Math.floor(Math.random(5) * 300 + 1000);
    this.y = 350;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
    this.speed = speed;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width - 30;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  draw() {
    this.img.src =
      "./docs/assets/imgs/kisspng-tom-cat-jerry-mouse-tom-and-jerry-cartoon-animatio-tom-jerry-5acce98868e5c4.6021030715233785684297.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
