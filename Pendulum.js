class Pendulum {
    constructor(anchorX, anchorY, len, angle, mass = 1, drag = 0) {

        this.anchor = createVector(anchorX, anchorY);

        this.mass = mass;
        this.drag = drag;

        this.len = len;
        this.angle = angle;
        this.angleVel = 0;
        this.angleAcc = 0;

        this.pos = createVector();
        this.updatePosition();
    }

    update() {
        // let force = p5.Vector.sub(this.b.pos, this.a.pos);

        // let force = gravity * sin(angle);
        // angleA = -force / len;
        this.angleVel += this.angleAcc;
        this.angle += this.angleVel;
        this.angleAcc = 0;
        this.updatePosition();

    }

    updatePosition() {
        this.pos.x = this.len * sin(this.angle) + this.anchor.x;
        this.pos.y = this.len * cos(this.angle) + this.anchor.y;
    }

    /**
    * @param {p5.Vector} force
    */
    applyForce(force) {
        let f = force.copy();
        f.div(this.mass * this.len);
        this.angleAcc += -f.y * sin(this.angle) + f.x * cos(this.angle);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(127);
        line(this.anchor.x, this.anchor.y, this.pos.x, this.pos.y);
        circle(this.pos.x, this.pos.y, 16);
    }
}