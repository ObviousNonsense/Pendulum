class Particle {
    constructor(x, y, mass = 1, drag = 0.005) {
        this.pos = createVector(x, y);
        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);
        this.mass = mass;
        this.drag = drag;
    }

    update() {
        this.vel.mult(1 - this.drag);

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    /**
    * @param {p5.Vector} force
    */
    applyForce(force) {
        let f = force.copy();
        f.div(this.mass);
        this.acc.add(f);
    }

    show() {
        stroke(200);
        strokeWeight(2);
        fill(127);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }
}