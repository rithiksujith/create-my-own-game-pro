class Zombi{
    constructor(x,y){
      
    
     this.body = bodies.rectangle(x,y,30,30);
     this.width = 30;
     this.height = 30;
     World.add(world,this.body);
    this.image = loadImage("images/zombi.png");
    
    
     }
     display(){
        image(this.image, 0, 0, this.width, this.height);
        this.velocityX = -30;
        lifeTime(300);
     }
    }
