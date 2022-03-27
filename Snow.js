class Snow {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/snow1.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  