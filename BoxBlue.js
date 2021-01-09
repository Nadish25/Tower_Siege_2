class BoxBlue{

  constructor(x,y,width,height)
  {
      
      var options={
          'restitution':0.5,
          'friction':0.5,
          'density' :1,
          'isStatic':false
      }
      this.body=Bodies.rectangle(x,y,width,height,options);

      this.width=width;
      this.height=height
      World.add(world,this.body);
      this.visibilty=255;


  }

  display()
  {
      var pos=this.body.position;
      var angle=this.body.angle;

      if(this.body.speed<3){
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate (angle);
        stroke(0)
        strokeWeight(1)
        fill(59,175,218);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
    
            
            pop();

        }

      
  }
};