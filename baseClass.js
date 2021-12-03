class baseClass {
    constructor(x,y,width,height){
      this.image = loadImage('sprites/base.png')
      var options = {
        restitution: 0.8,
        friction:3
      };
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop()
    }
  }
  