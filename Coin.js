class Coin{
    constructer(x,y,width,height){
      
        
        this.body = bodies.rectangle(x,y,30,30);
     this.width =10;
     this.height = 10;
     World.add(world,this.body);
     this.image = loadImage("images/coin(2).png")
    }
    display(){
        image(this.image, 0, 0, this.width, this.height);
        this.velocityX = -30;  
        lifeTime(300); 
    }
}