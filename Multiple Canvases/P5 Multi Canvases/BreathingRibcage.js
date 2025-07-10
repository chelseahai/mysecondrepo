let BreathingRibcage = function(p) {
  let t = 0;
  p.setup = function() {
    p.createCanvas(600, 400);
    p.stroke(50);
    p.noFill();
  };
  p.draw = function() {
    p.background(255);
    p.translate(p.width / 2, p.height / 2);
    let breath = p.sin(t) * 20;
    for (let i = 0; i < 10; i++) {
      let y = i * 10;
      let offset = p.map(i, 0, 9, 60, 100) + breath;
      p.beginShape();
      p.curveVertex(-offset, y);
      p.curveVertex(-offset, y);
      p.curveVertex(0, y + 5);
      p.curveVertex(offset, y);
      p.curveVertex(offset, y);
      p.endShape();
    }
    t += 0.03;
  };
};
window.addEventListener("load", () => {
  new p5(BreathingRibcage, "canvas1");
});