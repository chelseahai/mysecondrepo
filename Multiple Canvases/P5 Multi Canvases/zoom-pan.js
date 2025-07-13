
let sketch3 = function(p) {
  let accessories = [];

  p.setup = function() {
    let canvas = p.createCanvas(300, 400);
    canvas.parent("canvas3");
    for (let i = 0; i < 80; i++) {
      accessories.push({
        x: p.random(100, 200),
        y: p.random(100, 300),
        type: p.random(['star', 'bow']),
        size: p.random(10, 20),
        color: p.random(['#ff99cc', '#ff66cc', '#ffddee', '#ffb6c1'])
      });
    }
  };

  p.draw = function() {
    p.background('#ffeef7');
    p.noFill();
    p.stroke('#ff69b4');
    p.strokeWeight(3);
    p.beginShape();
    p.vertex(150, 80);
    p.bezierVertex(90, 120, 90, 280, 150, 340);
    p.bezierVertex(210, 280, 210, 120, 150, 80);
    p.endShape();

    for (let a of accessories) {
      p.fill(a.color);
      p.noStroke();
      if (a.type === 'star') {
        p.beginShape();
        for (let i = 0; i < 5; i++) {
          let angle = p.TWO_PI * i / 5;
          let sx = a.x + p.cos(angle) * a.size;
          let sy = a.y + p.sin(angle) * a.size;
          p.vertex(sx, sy);
        }
        p.endShape(p.CLOSE);
      } else {
        p.ellipse(a.x, a.y, a.size, a.size / 2);
      }
    }
  };
};
new p5(sketch3);
