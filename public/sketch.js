let socket;
let player;
let bullets = [];

function setup() {
  createCanvas(800, 800);
  player = {
    x: random(width),
    y: random(height),
    col: {
      r: random(255),
      g: random(255),
      b: random(255)
    }
  }

  socket = io.connect('http://localhost:3000');
  socket.on('player', (data) => {
    background(51);
    managePlayer(data);
  });
  socket.on('bullet', (data) => {
    drawBullet(data.x, data.y);
  });
}

function draw() {
  managePlayer(player);
  socket.emit('player', player);
  console.log(bullets.length);

  for (const bullet of bullets) {
    drawBullet(bullet.pos.x, bullet.pos.y);
    bullet.update();
    let bulletData = {
      x: bullet.pos.x,
      y: bullet.pos.y
    }
    socket.emit('bullet', bulletData);
    if (bullet.outOfBounds())
      bullets.splice(bullets.indexOf(bullet), 1);
  }
}

function mousePressed() {
  bullets.push(new Bullet(player.x, player.y));
}