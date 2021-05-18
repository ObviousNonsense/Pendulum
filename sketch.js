let angle;

let angleV = 0;
let angleA = 0;

let bob1;
let bob2;
let len;
let anchor;

let gravity;

let spring1;
let spring2;

let pendulum;

function setup() {
    createCanvas(800, 800);
    anchor = new Particle(width / 2, 0, 1, 0);
    bob1 = new Particle(width / 2 + 200, 300, 1, 0);
    bob2 = new Particle(width / 2 - 50, 600, 1, 0);
    spring1 = new Spring(0.01, 100, anchor, bob1);
    spring2 = new Spring(0.05, 300, bob1, bob2);
    gravity = createVector(0, 1);
    // wind = createVector(0.2, 0);

    // angle = PI / 4;
    // len = 800;
    pendulum = new Pendulum(width/2, 0, 300, PI/4);
}

function draw() {
    background(51);
    pendulum.applyForce(gravity);
    // pendulum.applyForce(wind);
    pendulum.update();
    pendulum.show();


    // spring1.update();
    // spring2.update();

    // anchor.acc.set(0, 0);
    // anchor.vel.set(0, 0);
    // anchor.pos.set(width / 2, 0);

    // anchor.update();

    // bob1.applyForce(gravity);
    // bob1.update();

    // bob2.applyForce(gravity);
    // bob2.update();

    // spring1.show()
    // spring2.show()
    // anchor.show();
    // bob1.show();
    // bob2.show();



}
