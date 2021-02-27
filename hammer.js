class Hammer{
    constructor(x,y,width,height){
        var options{
            'density' : 2,
            'restitution' :1.0, 
            'friction' : 0.5 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      rect(pos.x, pos.y, this.width, this.height);
      //super.display();
    }
  }
  