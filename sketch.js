let gravity;
let spring1;
let pendulum1;
let pendulum2;

function setup() {
    createCanvas(800, 600);
    pendulum1 = new Pendulum(width / 4, 0, 200, PI / 4);
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

    pendulum1.show();
    pendulum2.show();
    spring1.show()
}
