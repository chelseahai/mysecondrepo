let EyeTracking = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
  };
  p.draw = function() {
    p.background(255);
    let eyeX = p.width / 2;
    let eyeY = p.height / 2;
    let pupilX = p.map(p.mouseX, 0, p.width, -15, 15);
    let pupilY = p.map(p.mouseY, 0, p.height, -15, 15);

    p.fill(240);
    p.stroke(0);
    p.ellipse(eyeX, eyeY, 100, 60);
    p.fill(100, 180, 255);
    p.ellipse(eyeX + pupilX, eyeY + pupilY, 30, 30);
    p.fill(0);
    p.ellipse(eyeX + pupilX, eyeY + pupilY, 10, 10);
  };
};
window.addEventListener("load", () => {
  new p5(EyeTracking, "canvas2");
});