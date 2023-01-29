let num = 0

let objects = ["pen","honor code","laptop"]
let roomObject = [0,1]
let inventory = []
let pen = false
let hc = false
function setup() {
  createCanvas(windowWidth, windowHeight);
  num = 0
}

function draw() {
  background("white")
  rooms(num)
  text(inventory.length,30,30)
  text(pen,30,50)
  text(hc,30,50)


  text(mouseX, windowWidth - 140,30)
  text(mouseY, windowWidth - 70,30)
  fill("green")
  rect(windowWidth - 20,0, 20,windowHeight)

  fill("red")
  rect(0,0, 20,windowHeight)
  obj()
  
  // print(inventory)

}


function rooms(num) {

  color = ""
  if (num == 0){
    color = "blue"
  }
  else if (num == 1){
    color = "green"

  }
  fill(color)
  rect(windowWidth/4, windowHeight/4,300,300)

}

function obj(){

  fill("black")
  for(let i = 0; i < objects.length; i++){
    fill("gray")
    rect(50 + i * 100, 40, 30,10)
    fill("black")
    text(objects[i],50 + i * 100,50)
  }

  for(let i = 0; i < roomObject.length; i++){
    fill("green")
    rect(50 + i * 100, 60, 30,10)
    fill("black")
    text(objects[roomObject[i]],50 + i * 100,70)
   }

   for(let i = 0; i < inventory.length; i++){
  
    fill("black")
    text(objects[inventory[i]],50 + i * 100,90)
   }
}

function mouseClicked(){
  print(roomObject)
  if (mouseX < 20){
    num -=1
  } 
  if (mouseX > windowWidth - 20){
    num += 1
  }

  //pen
  if (mouseY > 60 && mouseY < 70 && mouseX > 50 && mouseX < 80){
    pen = true
    append(inventory,0)

    removeObject(0,0)
    print(inventory)
  }


  if (mouseY > 60 && mouseY < 70 && mouseX > 150 && mouseX < 180){
    hc = true
    append(inventory,1)
    removeObject(0,1)
    print(inventory)
  }
  
function removeObject(room,index){
  
  for (let i = 0; i < roomObject.length; i++){
    print(roomObject[i])
    if (roomObject[i] == index){
      print(i)
      roomObject.splice(i,1)
    }
    
  
  }
  
  
}
  
  
}