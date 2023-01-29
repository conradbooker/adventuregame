let num = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  num = 0
}

function draw() {
  background("white")
  rooms(num)
  text(num,30,30)

  fill("green")
  rect(windowWidth - 20,0, 20,windowHeight)

  fill("red")
  rect(0,0, 20,windowHeight)
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
  print(color)
  rect(windowWidth/4, windowHeight/4,300,300)

}


function mouseClicked(){
  if (mouseX < 20){
    num -=1
  } 
  if (mouseX > windowWidth - 20){
    num += 1
  }
}