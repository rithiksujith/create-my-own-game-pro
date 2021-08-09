class Player {
    constructor(x,y){

        this.body = bodies.rectangle(x , y , width , height);
        this.height = 30;
        this.width = 30;
        World.add(world.this.body)
        this.image = loadImage("images/mario.png");
        
    }
     display(){
        image(this.image, 0, 0, this.width, this.height);


    }
    sapceKeyPressed(){
        if(keyCode === 32){
            this.velocityY = -12;
        }

    }
    playerHitMob(){
        if(isTouching(Player,mobsGroup) ){
            

        }
    }
}