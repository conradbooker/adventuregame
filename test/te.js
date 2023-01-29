function setup() {
  createCanvas(650, 500);
  background("grey")
}

function draw() {
  //circle(mouseX, mouseY, 20);
  noStroke()
  fill("brown")
  rect(0,500*3/4, 650/8, 500/4)
  rect(650*7/8,500*3/4, 650/8, 500/4)
  fill("green")
  triangle(25,440, 55, 420, 55, 460)
  triangle(630, 440, 600, 420, 600,460)

  

  
}

function mouseClicked(){
  if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420){
    console.log("left")
  }
  if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420){
    console.log("right")
  }
  console.log(mouseX, mouseY)
  

}