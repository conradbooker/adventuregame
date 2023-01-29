let exitImage
let classroomImage
let libraryImage
let lockersImage
let turfImage
let honorCodeImage

let roomNum=0
let roomArr=[];

function preload() {
    roomArr[4] = loadImage("files/101.png")
    roomArr[2] = loadImage("files/classroom.png")
    roomArr[1] = loadImage("files/libery.png")
    roomArr[3] = loadImage("files/lockers.png")
    roomArr[0] = loadImage("files/turf.png")
    honorCodeImage = loadImage("files/honorCodeImage.png")
}
function setup(){
    createCanvas(650,500)
}
function draw(){
    image(roomArr[roomNum], 0,0,650,500)
    noStroke()
    fill("green")
    if (roomNum > 0) {
      triangle(25,440, 55, 420, 55, 460)
    }
    if (roomNum < 4) {
      triangle(630, 440, 600, 420, 600,460)
    }

    image(honorCodeImage, 0, 0, 200, 200)

}


function mouseClicked(){
    if (roomNum > 0) {
      if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420 && roomNum>=0){
        roomNum -= 1
        console.log("dddddd")
      } 
    }
    if (roomNum < 4) {
      if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420 && roomNum<=4){
        roomNum += 1
        console.log(roomNum)
      }
  }
  }