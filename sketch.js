let exitImage
let classroomImage
let libraryImage
let lockersImage
let turfImage
let honorCodeImage

let roomNum=0
let roomArr=[];

let objects = ["pen","laptop","id","honor code"]
// 0 pen 3
// 1 laptop 1
// 2 id 4
// 3 honor code inv

// turf 0
// library 1
// cs lab 2
// kiolman 3
// locker 4
// 101 5
let roomObject = [[],[1],[],[0],[3],[]]
let inventory = []

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
    roomArr[5] = loadImage("files/101.png")
    roomArr[2] = loadImage("files/classroom.png")
    roomArr[1] = loadImage("files/libery.png")
    roomArr[4] = loadImage("files/lockers.png")
    roomArr[0] = loadImage("files/turf.png")
    roomArr[3]=loadImage("files/kolman.jpeg")

    pen = loadImage("files/pen.jpg")
    laptop = loadImage("files/laptop.png")
    // id = loadImage("files/id.png)
    honorCodeImage = loadImage("files/honorCodeImage.png")
    loudSpeakerSound = loadSound('files/lmao.mp3')
    charger=loadImage("files/79954.png")
    printer =loadImage("files/229453.png")
    
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

    fill(160,82,45)
    rect(55+25, 410, 50, 60)
    rect(175+30+25, 410, 50, 60)
    rect(325+30+25, 410, 50, 60)
    rect(475+30+25, 410, 50, 60)
    // turf
    if (roomNum===0){
      fill("white")
      
      rect(330,268,18,10)
      fill('red')
      quad(330,268,325,265,325,281,330,278)
      quad(348,268,353,265,353,281,348,278)
      fill("green")
      circle(368,273,10)
    }

    if (roomNum == 1){
      if (roomObject[1].length != 0){
        push();
        translate(436,265)
        scale(.25)
        image(laptop,0,0)
        pop();
      }
    }
    if (roomNum==2){
      image(charger, 370,290, 70, 35)
      image(printer, 370, 260, 50, 50)
      
    }

    if (roomNum == 3){

      if (roomObject[3].length != 0){
        image(pen,270,300,25,25)
        
      }
      
    }
    if (roomNum==4){
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
    text(mouseX+"   "+mouseY,mouseX,mouseY)
    if (inventory.includes(objects[3])){
      image(honorCodeImage, 475+30+25,410,50,60)
    }

}


function mouseClicked() {
    //console.log(mouseX, mouseY)

    if (mouseX>=20 && mouseX<=60 && mouseY<=460 && mouseY>=420 && roomNum>0){
      roomNum -=1
      console.log("minus")
    } 
    if (mouseX>=600 && mouseX<=630 && mouseY<=460 && mouseY>=420 && roomNum<5){
      roomNum += 1
      console.log("plus")
    }
    
    // Turf
    if (roomNum==0 && mouseX>=368-6 && mouseX<=368+6 && mouseY<=273-6 && mouseY>=273+6){
      
      //sound
    }

    if (roomNum==2 && mouseX>=370 && mouseX <=420 && mouseY>=265 && mouseY<=300){
      inventory.push(objects[3])
      
    }

    // lockers
    if (roomNum==3 && mouseX>=520 && mouseX<=580 && mouseY<=400 && mouseY>=145){
      //show numpad
    }

    //laptop in inventory
    if (roomNum==1 && mouseX>=435 && mouseX<=536 && mouseY<=320 && mouseY>=260){
      console.log("clilck")
      inventory.push(1)
      roomObject[1].pop()

      console.log(inventory)
      console.log(roomObject)
    }

    if (roomNum==3 && mouseX>=275 && mouseX<=290 && mouseY<=326 && mouseY>=300){

      inventory.push(0)
      roomObject[3].pop()


    }
  }