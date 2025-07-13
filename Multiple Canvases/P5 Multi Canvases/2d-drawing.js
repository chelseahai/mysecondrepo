
let sketch1 = function(p) {
  let hearts = [];

  p.setup = function() {
    let canvas = p.createCanvas(300, 400);
    canvas.parent("canvas1");
    for (let i = 0; i < 20; i++) {
      hearts.push({
        x: p.random(100, 200),
        y: p.random(80, 320),
        size: p.random(10, 30),
        speed: p.random(0.5, 1.5)
      });
    }
  };

  p.draw = function() {
    p.background('#ffeef7');
    p.noFill();
    p.stroke('#ff69b4');
    p.strokeWeight(4);
    p.beginShape();
    p.vertex(150, 60);
    p.bezierVertex(80, 100, 80, 300, 150, 360);
    p.bezierVertex(220, 300, 220, 100, 150, 60);
    p.endShape();

    for (let h of hearts) {
      p.fill('#ff99cc');
      p.noStroke();
      p.ellipse(h.x, h.y, h.size + 5 * p.sin(p.frameCount * 0.1));
    }
  };
};
new p5(sketch1);
