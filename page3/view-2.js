var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = []; 
var FPS = 1;
var x = canvas.width; 

var speed = 15;

for (var i = 0; i < x; i++) {
  _x = Math.random() * canvas.width;
  _y = Math.random() * canvas.height;
  if(_x < canvas.width / 2) _vx = -Math.floor(Math.random() * speed) - 1;
  else _vx = Math.floor(Math.random() * speed) + 1;
  if(_y < canvas.height / 2) _vy = -Math.floor(Math.random() * speed) - 1;
  else _vy = Math.floor(Math.random() * speed) + 1;
  stars.push({
    x: _x,
    y: _y,
    radius: Math.random(),
    vx:  _vx,
    vy: _vy
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.globalCompositeOperation = "lighter";
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i]; 
    ctx.fillStyle = "#cce0ff";

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  for (var i = 0; i < 40; i++) {
  _x = Math.random() * canvas.width;
  _y = Math.random() * canvas.height;
  if(_x < canvas.width / 2) _vx = -Math.floor(Math.random() * speed) - 1;
  else _vx = Math.floor(Math.random() * speed) + 1;
  if(_y < canvas.height / 2) _vy = -Math.floor(Math.random() * speed) - 1;
  else _vy = Math.floor(Math.random() * speed) + 1;
  stars.push({
    x: _x,
    y: _y,
    radius: Math.random(),
    vx:  _vx,
    vy: _vy
  });
  }

  stars = stars.filter(function(star){
    return star.x < canvas.width && star.x > 0 && star.y < canvas.height && star.y > 0;
  });
}


function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];  
    s.x += s.vx / FPS;
    s.y += s.vy / FPS;
  }
}


function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();