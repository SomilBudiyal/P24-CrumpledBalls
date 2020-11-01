class PaperBall  {
    constructor(x, y, diameter){
    
     var options = {
        isStatic : false,
        'restitution' : 0.4,
        'friction' : 1,
        'density' : 1.2,
    } 
   
   this.body = Bodies.circle(x,y,diameter/3,options);
   this.image = loadImage("Pictures/paper.png");
   this.diameter = diameter;

   World.add(world, this.body);
   }
  display(){
   var pos =this.body.position;   
   push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
   fill("white");
   imageMode(CENTER); 
   image(this.image,0,0,this.diameter,this.diameter);
   pop();
  } 
}