let exitImage
let classroomImage
let libraryImage
let lockersImage
let turfImage
let honorCodeImage

let roomNum=0
let roomArr=[];
let roomObjs=[["speakerButton", "speaker"], ["librarian", "pen", "laptop"], ["charger", "printer"], ["phone", "honorCode"], ["ID"]]

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
    strokeWeight(0)
    fill("green")
    triangle(25,440, 55, 420, 55, 460)
    triangle(630, 440, 600, 420, 600,460)
    if (roomNum===0){
      fill("white")
      
      rect(330,268,18,10)
      fill('red')
      quad(330,268,325,265,325,281,330,278)
      quad(348,268,353,265,353,281,348,278)
      fill("green")
      circle(368,273,6)
    }
    
        
}


function mouseClicked(){
    if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420 && roomNum>0){
      roomNum -=1
    } 
    if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420 && roomNum<4){
      roomNum += 1
    }
    if (mouseX>=368-6 && mouseX<=368+6 && mouseY<=273-6 && mouseY>=273+6){
      textSize(100)
      fill("red")
      text("When was Trinity founded?", 330,268)
    }
  }