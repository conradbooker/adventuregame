let num = 0

objects = {1:"pen",2:"honor code", 3:"laptop"}
function setup() {
  createCanvas(650, 500);
  num = 0
}

function draw() {
  background("grey")
  rooms(num)
  text(num,30,30)

  noStroke()
  fill("brown")
  rect(0,500*3/4, 650/8, 500/4)
  rect(650*7/8,500*3/4, 650/8, 500/4)
  fill("green")
  triangle(25,440, 55, 420, 55, 460)
  triangle(630, 440, 600, 420, 600,460)
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
  //rect(windowWidth/4, windowHeight/4,300,300)

}


function mouseClicked(){
  if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420){
    num -=1
  } 
  if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420){
    num += 1
  }
}