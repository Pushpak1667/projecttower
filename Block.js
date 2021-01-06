class Block{

    constructor(x, y) {

        var options = {
            isStatic: false,
            restitution : 0.1,
            friction : 0.2
        }
        this.body = Bodies.rectangle(x, y,60,40, options);
        this.width = 60;
        this.height = 40;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;

        strokeWeight(5);
        // fill("red");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}