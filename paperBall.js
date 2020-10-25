class PaperBall {
    constructor(x, y, diameter){
    
     var options = {
        isStatic : false,
        'restitution' : 0.4,
        'friction' : 4,
        'density' : 1.2,
    } 
   
   this.body = Bodies.circle(x,y,diameter,options);
   this.width = width;
   this.height = height;
   this.diameter = diameter;

   World.add(world, this.body);
   }
  display(){
   var pos =this.body.position;   
   fill("white");
   ellipseMode(RADIUS);
   ellipse(pos.x,pos.y,this.diameter);  
  } 
}