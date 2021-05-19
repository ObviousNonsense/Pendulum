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

        this.angleHistory = [];
    }

    update() {
        this.angleVel *= 1 - this.drag;
        this.angleVel += this.angleAcc;
        this.angle += this.angleVel;
        this.angleAcc = 0;
        this.updatePosition();

        this.angleHistory.push((2 * this.len / PI) * this.angle);
        if (this.angleHistory.length > height - this.len) {
            this.angleHistory.shift();
        }
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

    plotAngle() {
        stroke(200);
        strokeWeight(1);
        for (let i = 1; i < this.angleHistory.length; i++) {
            let end = this.angleHistory.length;
            let p1 = this.angleHistory[end - i];
            let p2 = this.angleHistory[end - i - 1];

            let yoffset = this.len;
            let xoffset = this.anchor.x;
            line(xoffset + p1, yoffset + i - 1, xoffset + p2, yoffset + i);
        }
    }
}