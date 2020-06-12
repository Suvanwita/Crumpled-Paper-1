class Paper {
    constructor(x,y,radius) {
     
      var options = {
          isStatic:true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.body.radius=2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }