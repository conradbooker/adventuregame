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
    triangle(25,440, 55, 420, 55, 460)
    triangle(630, 440, 600, 420, 600,460)
        
}


function mouseClicked(){
    if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420 && roomNum>0){
      roomNum -=1
    } 
    if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420 && roomNum<5){
      roomNum += 1
    }
  }