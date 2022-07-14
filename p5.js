
var player = 0 
var playerx = 50
var playery = 50
var playerr = 0
function preload(){
  playerImage = loadImage("images/ship.gif")
  backgroundImage = loadImage("images/back ground.gif")
  playerMoveingImage = loadImage("images/fly ship.gif")
  project = loadImage("images/pro.png")
  enemyImg = loadImage("images/enemy/bad.png")
}



function setup() {
  rt = 0
  xspd = 0
  yspd = 0
  createCanvas(600,400);
  player = createSprite(playerx,playery,64,64);
  player.addImage(playerImage,"images/ship.gif");
  player.scale = 0.75
  enemy =createSprite(Math.floor(Math.random()*300),Math.floor(Math.random()*300),30,31)
  enemy.addImage(enemyImg,"images/enemy/bad.png")
  player.setCollider("rectangle", 0, 0, 40, 40); 
  enemy.setCollider("rectangle", 0, 0, 40, 40); 
}

function draw() {
  background(backgroundImage,"images/back ground.gif")
  drawSprites()
  movement()
  enemyAi()
  //enemy.maxSpeed = 
  ob()
}
function drift(){
  var drift = 5
  while(true){
    drift = drift - 0.01
    var drifting = false
    if(goleft == true){
      player.position.x += drift;
    }
  
    }

}
function movement(){
  player.addImage(playerImage,"images/ship.gif")
  if(keyIsDown(87)){ //W
    yspd += sin((player.rotation+90)*Math.PI/180) * .4
    xspd += cos((player.rotation+90)*Math.PI/180) * .4
    player.addImage(playerMoveingImage,"images/ship fly.gif");
  }
  if(keyIsDown(83)){//S
    yspd -= sin((player.rotation+90)*Math.PI/180) * .4
    xspd -= cos((player.rotation+90)*Math.PI/180) * .4
    player.addImage(playerMoveingImage,"images/ship fly.gif");
  }
  if(keyIsDown(65)){//A
    player.rotation += -5
    playerr -= 5
  }
  if(keyIsDown(68)){ //D
    player.rotation += 5
    playerr += 5
  }
  player.position.x += xspd
  player.position.y += yspd
  xspd -= Math.sign(xspd)*.1
  yspd -= Math.sign(yspd)*.1
}
function ob(){
  if(player.position.y < 0){
    player.position.y += 200
  }
  if(player.position.x < 0){
    player.position.x += 20
  }
  
}
function mousePressed(){
  
  var pro = createSprite(player.position.x, player.position.y)
  pro.scale = 3
  pro.addImage(project,"images/pro.png")
  pro.attractionPoint(50,mouseX,mouseY)
  
}
function enemyAi(){
  enemy.scale = 0.75
  //enemy.attractionPoint(0.1,player.position.y,player.position.x)
  enemy.rotation = rt
  var re = Math.floor(Math.random()* 3);
  rt += Math.random()*2-1//Math.floor(Math.random()* 180);
  if(enemy.position.y < 0){
    enemy.position.y += 10
  }
    if(enemy.position.x < 0 ){
    enemy.position.x+= 2
  }
    if(enemy.position.x > 600){
    enemy.position.x += 2
  }
  
  

}
