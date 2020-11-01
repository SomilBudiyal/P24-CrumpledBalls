 class Dustbin {
     constructor(x, y, width, height){

    var options ={
        isStatic: true
    }       
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Pictures/dustbingreen.png");
     
    World.add(world, this.body);
    }
   display(){
    var pos =this.body.position;   
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);  
    image(this.image, 905, 320,290,320);
   } 
 }