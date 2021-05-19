let gravity;
let spring1;
let pendulum1;
let pendulum2;

let plot1 = [];

function setup() {
    createCanvas(800, 600);
    pendulum1 = new Pendulum(width / 4, 0, 200, 0);
    pendulum2 = new Pendulum(3 * width / 4, 0, 200, -PI / 3);
    spring1 = new Spring(0.001, width/2, pendulum1, pendulum2);
    gravity = createVector(0, 1);
}

function draw() {
    background(51);
    pendulum1.applyForce(gravity);
    pendulum2.applyForce(gravity);

    pendulum1.update();
    pendulum2.update();
    spring1.update();

    plot1.push(180*pendulum1.angle);

    pendulum1.show();
    pendulum2.show();
    spring1.show()

    pendulum1.plotAngle();
    pendulum2.plotAngle();

    // stroke(200);
    // strokeWeight(1);
    // for (let i = 1; i < plot1.length; i++) {
    //     let end = plot1.length;
    //     let p1 = plot1[end-i];
    //     let p2 = plot1[end-i-1];

    //     let yoffset = pendulum1.len;
    //     let xoffset = pendulum1.anchor.x;
    //     line(xoffset+p1, yoffset+i-1, xoffset+p2, yoffset+i);
    // }

    // if (plot1.length > height - pendulum1.len) {
    //     plot1.shift();
    // }
}
