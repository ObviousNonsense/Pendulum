let gravity;
// let spring1;
// let pendulum1;
// let pendulum2;

let pendulums = [];
let springs = [];


function setup() {
    createCanvas(800, 600);
    // pendulum1 = new Pendulum(width / 4, 0, 200, 0);
    // pendulum2 = new Pendulum(3 * width / 4, 0, 200, -PI / 3);
    // spring1 = new Spring(0.001, width/2, pendulum1, pendulum2);

    let num = 6;
    let len = 100;
    let k = 0.0005
    for (let i = 0; i < num; i++) {
        let p = new Pendulum(
            map(i, 0, num, 0, width) + 0.5*width/num, 0, len, random(-PI/3, PI/3));
        pendulums.push(p);

        if (i > 0) {
            let s = new Spring(
                k, pendulums[i].anchor.x - pendulums[0].anchor.x,
                pendulums[i], pendulums[i-1]
            );
            springs.push(s);
        }
    }
    gravity = createVector(0, 1);
}

function draw() {
    background(51);

    for (let p of pendulums) {
        p.applyForce(gravity);
        p.update();
        p.show();
        p.plotAngle();
    }

    for (let s of springs) {
        s.update();
        s.show();
    }

    // pendulum1.applyForce(gravity);
    // pendulum2.applyForce(gravity);

    // pendulum1.update();
    // pendulum2.update();
    // spring1.update();

    // pendulum1.show();
    // pendulum2.show();
    // spring1.show()

    // pendulum1.plotAngle();
    // pendulum2.plotAngle();

}
