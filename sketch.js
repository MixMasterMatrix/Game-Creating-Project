var gameState = "titleScreen";
var hitTargets = 0;
var timer = 60;


function preload() {
    level5 = loadImage("pics/7 star hotel.jpg");
    citizen2 = loadImage("pics/billy.png");
    citizen1 = loadImage("pics/bob.png");
    titlePage = loadImage("pics/cover screen.jpg");
    level1 = loadImage("pics/hitman background.jpg");
    citizen3 = loadImage("pics/mary.png");
    level4 = loadImage("pics/my private jet.jpg");
    nextBtn = loadImage("pics/next.png");
    level3 = loadImage("pics/nice restaurant.jpg");
    playBtn = loadImage("pics/play.png");
    citizen4 = loadImage("pics/some guy.png");
    level2 = loadImage("pics/some mall.jpg");
    targetImg = loadImage("pics/target.png");
    citizen5 = loadImage("pics/zoe.png");

}


function setup() {
  createCanvas(1520,750);
  
  play = createSprite(width/2, height/2 + 150)
  play.addImage(playBtn);
  play.scale = 0.5;

  next = createSprite(1325,625);
  next.addImage(nextBtn);
  next.scale = 0.3;

  targetsGroup = new Group()
  citizensGroup = new Group()
  
}


function draw() {

  if(gameState === "titleScreen"){
    background(titlePage);
    play.visible = true;
    next.visible = false;

    if(mousePressedOver(play)){
      gameState = "introScreen"
    }
  }
  

  if(gameState === "introScreen"){
    background("black");
    play.visible = false;
    next.visible = true;

    fill("white")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    
    text("You are an assassin who is hunting down various targets in the city", 1520/2, 625/2 - 50);
    text("who are suspected to be causing your clients some “issues”. Your job", 1520/2, 625/2) ;
    text("is to eliminate the targets, while not harming the citizens.", 1520/2, 625/2 + 50);
   
    if(mousePressedOver(next)){
      gameState = "Level1"
    }
  }
  

  if(gameState === "Level1"){
    background(level1);    
    play.visible = false;
    next.visible = false;
   
    spawnTargets();
    spawnCitizens();

    fill("black")
    textSize(30);
    textFont("Segoe UI");
    textAlign(CENTER)
    text("Targets hit: " + hitTargets, 750, 60);
    
    if(frameCount % 30 === 0){
      timer -= 1;
  }

    fill("white");
    text("Time left: " + timer, 275, 60);
    if(timer === 0 && hitTargets < 15){
      gameState = "retry"
    }
  }
  
  if(gameState === "retry"){
    background("black")
  }

  drawSprites()
//  text(mouseX + ", " + mouseY, mouseX, mouseY);
}



function spawnTargets(){
  if(frameCount % Math.round(random(60,120)) === 0){
    target = createSprite(random(100,1500),random(50,575),100,100);
    target.addImage(targetImg)
    target.lifetime = 60;
    target.scale = 0.5;

    targetsGroup.add(target)

  }
 /* if(mousePressedOver(targetsGroup)){
    hitTargets +=1;
    targetsGroup[0].destroy();
  } */
}

function spawnCitizens(){
  if(frameCount % Math.round(random(120,200)) === 0){
    citizen = createSprite(random(100,1500),random(50,575),100,100);
    citizen.lifetime = 60;
    citizen.scale = 0.3;

    var rand = Math.round(random(1,5));
    switch(rand){
      case 1:
        citizen.addImage(citizen1);
        break;
      case 2:
        citizen.addImage(citizen2);
        break;
      case 3:
        citizen.addImage(citizen3);
        break;
      case 4:
        citizen.addImage(citizen4);
        break;
      case 5:
        citizen.addImage(citizen5);
        break;
      }
    citizensGroup.add(citizen)
  }
}