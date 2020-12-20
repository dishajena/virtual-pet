//Create variables here
var dog 
var dogimg
var dogimg2
var foodStock
var database
var foodS =0
var milkimg
function preload()
{
  dogimg=loadImage("images/dogImg.png")
  dogimg2=loadImage("images/dogImg1.png")
  milkimg=loadImage("images/Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250,10,50)
  dog.addImage(dogimg,"dog")
  dog.scale=0.1
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeSTOCK(foodS)
  dog.addImage(dogimg2)
}
  drawSprites();
  //add styles here
  fill ("blue")
text("foodstock "+foodS,250,200)
}
function readStock(data){
  foodS=data.val();

}

function writeSTOCK(m){
  if(m<=0){
    m=0
  } else{
    m=m-1
  } 

  database.ref('/').update({
    food:m
  })
}

