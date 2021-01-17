class Umbrella{
    constructor(x , y){
        var options ={
isStatic: true
        }
        this.image =loadImage("Boy.jpg");
        this.body = Bodies.circle(x, y, 25,options);
        this.r = 25;
        World.add(world, this.body); 

        
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,150,250);
        
    }
}