class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 450;
    this.intervalId = null;
    this.jerry = null;
    this.controls = null;
    this.enemies = [];
    this.frames = 0;
    this.points = [];
    this.score = 0;
    this.trap = [];
    this.life = 3;
    this.count = null;
    this.enemySpeed = 2;
    this.trapSpeed = 2;
    this.background = new Image();
  }

  start() {
    this.jerry = new Jerry(this, 0, 380, 70, 70);
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.count = 60 - Math.floor(this.frames / 60);
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  drawTime() {
    let count = 60 - Math.floor(this.frames / 60);
    //count--;
    if (count < 60 && count >= 40) {
      this.enemySpeed = 2;
      this.trapSpeed = 1;
    } else if (count < 40 && count >= 20) {
      this.enemySpeed = 2;
      this.trapSpeed = 2;
    } else {
      this.enemySpeed = 4;
      this.trapSpeed = 3;
    }

    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Times New Roman";
    this.ctx.fillText(`${count}`, 70, 70);
  }

  update() {
    this.frames++;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackground();
    this.jerry.draw();
    this.drawTime();
    this.jerry.stopJumping();

    this.createPoints();
    this.points.forEach((cheese) => {
      cheese.y++;
      cheese.draw();
    });

    this.createTrap();
    this.trap.forEach((trap) => {
      trap.x -= trap.speed;
      trap.y++;
      trap.draw();
    });

    this.createEnemies();
    this.enemies.forEach((enemy) => {
      enemy.x -= enemy.speed;
      enemy.draw();
      if (this.life <= 0) {
        this.stop();
      }
    });

    this.checkGameOver3();
    this.checkPoints();
    this.checkTomColision();
    this.drawScores();
    this.checkGameOver();

    this.drawWin();
  }

  drawBackground() {
    this.background.src = "./docs/imgs/D-spabdXUAAJwht.jpg";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  createEnemies() {
    if (this.frames % 300 === 0) {
      this.enemies.push(new Enemy(this, this.enemySpeed));
    }
  }

  drawScores() {
    this.ctx.font = "40px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${this.score}`, 800, 70);
  }

  createPoints() {
    if (this.frames % 100 === 0) {
      this.points.push(new Cheese(this));
      console.log(this.points);
    }
  }

  createTrap() {
    if (this.frames % 200 === 0) {
      this.trap.push(new Trap(this, this.trapSpeed));
    }
  }

  // colisao com o bonus - cheese
  checkPoints() {
    const jerry = this.jerry;
    let cheeseRemove = null;

    const crashed2 = this.points.some(function (cheese, i) {
      cheeseRemove = i;
      return jerry.crashWith(cheese);
    });
    if (crashed2) {
      this.score++;
      this.points.splice(cheeseRemove, 1);
    }
  }

  /////colisao com o TOM
  checkTomColision() {
    const jerry = this.jerry;
    this.enemies.forEach((enemy, index, arr) => {
      if (jerry.crashWith(enemy)) {
        arr.splice(index, 1);
        this.life -= 1;
      }
    });
  }

  checkGameOver() {
    console.log(this.life);
    if (this.life <= 0) {
      this.stop();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.font = "32px serif";
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`You got Caught!`, 400, 200);
    }
  }

  /////colisao com a armadilha - Game over imediato
  checkGameOver3() {
    const jerry = this.jerry;
    const crashed3 = this.trap.some(function (trap) {
      return jerry.crashWith(trap);
    });
    if (crashed3) {
      this.stop();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.font = "32px serif";
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`You got Caught!`, 400, 200);
    }
  }

  stop() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.font = "32px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`You got Caught!`, 400, 200);
    clearInterval(this.intervalId);
  }

  drawWin() {
    if (this.count - Math.floor(this.frames / 60) === 0) {
      this.stop();
      setInterval(() => {
        if (this.jerry.x < 1000) {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.jerry.x++;
          this.jerry.draw();
        } else {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.font = "32px serif";
          this.ctx.fillStyle = "white";
          this.ctx.fillText(`YOU WIN! Score: ${this.score}`, 400, 200);
        }
      }, 1000 / 60);
    }
  }
}
