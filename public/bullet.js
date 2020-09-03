class Bullet {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();

    this.mousePos = createVector(mouseX, mouseY);
    this.dir = p5.Vector.sub(this.mousePos, this.pos);
    this.dir.normalize();
    this.dir.mult(20);
  }
  update() {
    this.acc = this.dir;

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  outOfBounds() {
    return (this.pos.x < 0 || this.pos.x > width ||
      this.pos.y < 0 || this.pos.y > height)
  }
}

function drawBullet(x, y) {
  noStroke();
  fill(255, 255, 0);
  circle(x, y, 10);
}