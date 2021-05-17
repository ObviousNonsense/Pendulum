let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let anchor;

let gravity;

let spring;

function setup() {
    createCanvas(800, 800);
    anchor = new Particle(width/2, 0);
    bob = new Particle(width/2 + 100, 100);
    spring = new Spring(0.0001, 200, anchor, bob);
    // angle = PI / 4;
    // len = 800;
}

function draw() {
    background(51);


    spring.show()
    spring.update();
    bob.show();
    bob.update();
    anchor.show();
    anchor.update();

    if (mouseIsPressed) {
        anchor.pos.set(mouseX, mouseY);
        anchor.vel.set(0, 0);
    }

    // let force = gravity * sin(angle);
    // angleA = -force / len;
    // angleV += angleA;
    // angle += angleV;

    // bob.x = len * sin(angle) + origin.x;
    // bob.y = len * cos(angle) + origin.y;

    // stroke(255);
    // strokeWeight(4);
    // fill(127);
    // line(origin.x, origin.y, bob.x, bob.y);
    // circle(bob.x, bob.y, 64);
}
