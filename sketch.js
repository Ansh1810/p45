var ground,  bg, player;


function preload(){
bg = loadImage("bgg.jpg")

}
function setup(){
createCanvas(displayWidth,displayHeight- 120 )

ground = createSprite(displayWidth/2, displayHeight/2+253, displayWidth, 20);

bg1 = createSprite (displayWidth/2, displayHeight-459);
bg1.addImage("bg0", bg)
bg1.scale = 2.3;

player = createSprite (displayWidth/4-210, displayHeight-173);
//player.addImage("bg0", bg)
//player.scale = 2.3;
}
function draw(){
background(0)

drawSprites();

}