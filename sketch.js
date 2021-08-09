const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var PLAY = 1;
var END = 0;
var gamestate = PLAY;
var zombi1,crweeper1,player1,coin1;
var score = 0;
var engine,world;


function preload (){
crweeper = loadImage("images/crweeper.png");

}
function setUp (){ 
var canvas = createCanvas(1200,400);
engine = Engine.create();
 world = engine.world;

 zombi1 = new Zombi(100,100);

player1 = new Player(300,100);

 crweeper1 = new Crweeper(200,100)
 coin1 = new Coin(400,100);

 mobsGroup = new Group();
 coinsGroup = new Group();


}

function draw (){
    background("black");
    Engine.update(engine);
    text("Score: "+ score, 500,50);
   zombi1.display();
   crweeper1.display();
   player1.display();
   coin1.display();
   if (gamestate===PLAY){
      if(playerHitMob()){
       gamestate===END;

      } 
      if(isTouching(Player,Coin)){
        score = score+1
      }
      

   }

}
function mobs(){
    if(frameCount % 60 === 0) {
        var mob = createSprite(100,150,30,30);
        var rand = Math.round(random(1,2));
        switch(rand) {
            case 1:mob.addImage(Crweeper);
                    break;
            case 2:mob.addImage(Zombi);
                    break;
            default :break;                
        }
    }
   mobsGroup.add(mob); 
}
function coin(){
    if(frameCount % 60 === 0) {
        var coinR = createSprite(100,150,30,30);
        var rand = Math.round(random(1,1));
        switch(rand) {
            case 1:coinR.addImage(Coin);
                    break;
            default :break;                
        }
    }
    coinsGroup.add(coinR);
    
}
 
