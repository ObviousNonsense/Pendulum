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

        this.historyScale = 1;
        this.historyIndex = 0;
        this.angleHistory = new Array((height - this.len) / this.historyScale);
        this.angleHistory[0] = this.angle;
        this.lastAvgDelta = 0;
    }

    update() {
        this.angleVel *= 1 - this.drag;
        this.angleVel += this.angleAcc;
        this.angle += this.angleVel;
        this.angleAcc = 0;
        this.updatePosition();

        this.historyIndex++;
        if (this.historyIndex >= this.angleHistory.length) {
            this.historyIndex = 0;
        }
        this.angleHistory[this.historyIndex] = (2 * this.len / PI) * this.angle;
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
        colorMode(HSB, 100);
        stroke(map(this.lastAvgDelta, 0, 1, 50, 100), 50, 75);
        // stroke(75, 50, 100);
        strokeWeight(1);

        let n = this.historyIndex;
        let hist = this.angleHistory;
        let arr = hist.slice(n, hist.length).concat(hist.slice(0, n));
        let sumDelta = 0;

        for (let i = 0; i < arr.length-1; i++) {
            let p1 = arr[arr.length - i];
            let p2 = arr[arr.length - i - 1];
            sumDelta += Math.abs(p2 - p1);

            // console.log(p1 - p2);

            let yoffset = this.len;
            let xoffset = this.anchor.x;
            line(xoffset + p1, yoffset + this.historyScale * (i - 1),
                xoffset + p2, yoffset + this.historyScale * i);
        }

        this.lastAvgDelta = sumDelta / this.angleHistory.length;
        print(sumDelta);
    }
}