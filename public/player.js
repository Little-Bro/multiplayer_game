function managePlayer(player) {
  drawPlayer(player.x, player.y, player.col);
  updatePlayer();
}

function drawPlayer(x, y, col) {
  noStroke();
  fill(col.r, col.g, col.b);
  circle(x, y, 50);

  // eyes
  stroke(1);
  fill(0);
  circle(x - 8, y - 3, 4);
  circle(x + 8, y - 3, 4);
}

function updatePlayer() {
  let xdir, ydir;
  const movespeed = 5;

  // vertical
  if (keyIsDown(90))
    ydir = -1;
  else if (keyIsDown(83))
    ydir = 1;
  else
    ydir = 0;
  // horizontal
  if (keyIsDown(81))
    xdir = -1;
  else if (keyIsDown(68))
    xdir = 1;
  else
    xdir = 0;

  if (!keyIsPressed) {
    xdir = 0;
    ydir = 0;
  }

  player.x += movespeed * xdir;
  player.y += movespeed * ydir;
}