class Thunder{
    constructor(x , y){
        var options ={
isStatic: true
        }
        this.image = loadImage("1.png");
        this.body = Bodies.rectangle(x , y , width , height , options)
        this.width = 500;
        this.height = 500;
        
        World.add(world, this.body); 

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,500,500);
        
    }
}
