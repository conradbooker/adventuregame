let exitImage
let classroomImage
let libraryImage
let lockersImage
let turfImage
let honorCodeImage

let roomNum=0
let roomArr=[];

let showNumpad = false
let playSpeaker = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false
// let showNumpad = false

function preload() {
    roomArr[4] = loadImage("files/101.png")
    roomArr[2] = loadImage("files/classroom.png")
    roomArr[1] = loadImage("files/libery.png")
    roomArr[3] = loadImage("files/lockers.png")
    roomArr[0] = loadImage("files/turf.png")
    honorCodeImage = loadImage("files/honorCodeImage.png")
    loudSpeakerSoubnd = loadSound('files/lmao.mp3')
    charger=loadImage("files/79954.png")
}
function setup(){
    createCanvas(650,500)
    background(200)
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
    if (roomNum==2){
      image(charger, 360,288, 70, 35)
    }
    if (roomNum==3){
      fill(0)
      textSize(8)
      text("15", 441,272)
      textSize(9)
      text("16", 454,277)
      textSize(10)
      text("17", 471,285)
      textSize(13)
      text("18", 524,304)
      textSize(15)
      text("19", 606,332)
    }
        
}


function mouseClicked(){
    //console.log(mouseX, mouseY)
    if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420 && roomNum>0){
      roomNum -=1
    } 
    if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420 && roomNum<5){
      roomNum += 1
    }

    // Turf
    if (roomNum==0 && mouseX>=368-6 && mouseX<=368+6 && mouseY<=273-6 && mouseY>=273+6){
<<<<<<< HEAD
      
=======
      //sound
>>>>>>> 021dc3ff15936a22529f9305ee793855f027a9f1
    }

    //
    if (roomNum==3 && mouseX>=520 && mouseX<=580 && mouseY<=400 && mouseY>=145){
      //show numpad
    }
  }