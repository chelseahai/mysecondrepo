
let sketch2 = function(p) {
  let walkers = [];

  p.setup = function() {
    let canvas = p.createCanvas(300, 400);
    canvas.parent("canvas2");
    for (let i = 0; i < 200; i++) {
      walkers.push({ x: 150, y: 200, angle: p.random(p.TWO_PI), speed: p.random(0.5, 1.5) });
    }
    p.background('#ffeef7');
  };

  p.draw = function() {
    p.stroke('#ff66b2');
    p.strokeWeight(0.5);
    for (let w of walkers) {
      let nx = w.x + p.cos(w.angle) * w.speed;
      let ny = w.y + p.sin(w.angle) * w.speed;
      p.line(w.x, w.y, nx, ny);
      w.x = nx;
      w.y = ny;
      w.angle += p.random(-0.2, 0.2);
    }
  };
};
new p5(sketch2);
