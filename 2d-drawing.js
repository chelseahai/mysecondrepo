
let sketch1 = function(p) {
  let x = 0.0;
  let y = 0.0;
  let angle = 0.0;
  let radius = 80.0;
  let eyeColor;

  p.setup = function() {
    let canvas = p.createCanvas(300, 300);
    canvas.parent("canvas-container-1");
    p.noStroke();
    eyeColor = p.color("#C0D6E4"); // light blue-gray (light summer)
  };

  p.draw = function() {
    p.background("#F2F2F7"); // soft lavender

    let centerX = p.width / 2;
    let centerY = p.height / 2;
    angle += 0.05;
    x = centerX + p.cos(angle) * radius;
    y = centerY + p.sin(angle) * radius;

    // face base
    p.fill("#E1D7EC"); // soft pink-lavender
    p.ellipse(centerX, centerY, 180, 180);

    // left eye
    p.fill(eyeColor);
    p.ellipse(centerX - 40, centerY - 20, 40, 30);
    p.fill("#6E7CA0");
    p.ellipse(centerX - 40, centerY - 20, 10, 10);

    // right eye
    p.fill(eyeColor);
    p.ellipse(centerX + 40, centerY - 20, 40, 30);
    p.fill("#6E7CA0");
    p.ellipse(centerX + 40, centerY - 20, 10, 10);

    // mascara lines
    p.stroke("#A3B1C6");
    for (let i = -15; i < 15; i += 5) {
      p.line(centerX - 40 + i, centerY - 35, centerX - 40 + i, centerY - 45);
      p.line(centerX + 40 + i, centerY - 35, centerX + 40 + i, centerY - 45);
    }

    // pink animated circle
    p.noStroke();
    p.fill("#EAC4D5"); // cool light pink
    p.ellipse(x, y, 20, 20);
  };
};
new p5(sketch1);
