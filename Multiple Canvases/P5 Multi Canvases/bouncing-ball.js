
let sketch2 = function(p) {
  let boids = [];

  p.setup = function() {
    let canvas = p.createCanvas(300, 300);
    canvas.parent("canvas-container-2");
    for (let i = 0; i < 80; i++) {
      boids.push(new Boid(p.random(p.width), p.random(p.height)));
    }
  };

  p.draw = function() {
    p.background("#EDF2F6");
    for (let boid of boids) {
      boid.flock(boids);
      boid.update();
      boid.show();
    }
  };

  class Boid {
    constructor(x, y) {
      this.position = p.createVector(x, y);
      this.velocity = p5.Vector.random2D();
      this.velocity.setMag(p.random(2, 4));
      this.acceleration = p.createVector();
      this.maxForce = 0.05;
      this.maxSpeed = 3;
      this.color = p.random(["#B3CCE0", "#D9E2EC", "#C3D7EB", "#E5D4EF", "#E8E1F0"]);
    }

    edges() {
      if (this.position.x > p.width) this.position.x = 0;
      if (this.position.x < 0) this.position.x = p.width;
      if (this.position.y > p.height) this.position.y = 0;
      if (this.position.y < 0) this.position.y = p.height;
    }

    align(boids) {
      let perceptionRadius = 50;
      let steering = p.createVector();
      let total = 0;
      for (let other of boids) {
        let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
        if (other !== this && d < perceptionRadius) {
          steering.add(other.velocity);
          total++;
        }
      }
      if (total > 0) {
        steering.div(total);
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);
      }
      return steering;
    }

    update() {
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxSpeed);
      this.acceleration.mult(0);
      this.edges();
    }

    flock(boids) {
      let alignment = this.align(boids);
      this.acceleration.add(alignment);
    }

    show() {
      p.fill(this.color);
      p.noStroke();
      p.ellipse(this.position.x, this.position.y, 6);
    }
  }
};
new p5(sketch2);
