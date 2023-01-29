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

numPadArray = []
correctArray = [1,7,0,9]

let showNumpad = false
let playSpeaker = false

function preload() {
    roomArr[5] = loadImage("files/101.png")
    roomArr[2] = loadImage("files/classroom.png")
    roomArr[1] = loadImage("files/libery.png")
    roomArr[4] = loadImage("files/lockers.png")
    roomArr[0] = loadImage("files/turf.png")

    numpad = loadImage("files/numpadTrans.png")

    pen = loadImage("files/pen.jpg")
    laptop = loadImage("files/laptop.png")
    // id = loadImage("files/id.png)
    honorCodeImage = loadImage("files/honorCodeImage.png")
    loudSpeakerSound = loadSound('files/lmao.mp3')
    charger=loadImage("files/79954.png")
    printer =loadImage("files/229453.png")
    roomArr[3]=loadImage("files/kolman.jpeg")
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
        image(laptop,100,100)
      }
    }
    if (roomNum==2){
      image(charger, 370,290, 70, 35)
      image(printer, 370, 260, 50, 50)
      
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

    if (showNumpad) {
      text(String(numPadArray), 250, 100)
      image(numpad, 200, 100, 200, 250)
    }

    text(mouseX+"   "+mouseY,mouseX,mouseY)
    // text(returnString(numPadArray), 250,100)
    

}

function returnString(numPadArray) {
  let str
  for(let i = 0; i <= numPadArray.length(); i += 1) {
    str += String(i)
  }
  return str
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
    if (roomNum==0 && mouseX >= 368-6 && mouseX <= 368+6 && mouseY <= 273+6 && mouseY >= 273-6){
      loudSpeakerSound.play()
      showNumpad = false
    }

    // lockers
    if (roomNum==4 && mouseX>=520 && mouseX<=580 && mouseY<=400 && mouseY>=145){
      if (showNumpad) {
        showNumpad = false
      } else {
        showNumpad = true
      }
    }

    if (roomNum == 3) {
      showNumpad = false
    }

    if (roomNum == 2) {
      showNumpad = false
    }

    if (roomNum == 1) {
      showNumpad = false
    }

    if(showNumpad) {
      if (mouseX <= 250 + 20 && mouseX >= 250 - 20 && mouseY <= 150 + 20 && mouseY >= 150 - 20) {
        numPadArray.push(1)
        console.log(numPadArray)
      }
      else if (mouseX <= 300 + 20 && mouseX >= 300 - 20 && mouseY <= 150 + 20 && mouseY >= 150 - 20) {
        numPadArray.push(2)
        console.log(numPadArray)
      }
      else if (mouseX <= 350 + 20 && mouseX >= 350 - 20 && mouseY <= 150 + 20 && mouseY >= 150 - 20) {
        numPadArray.push(3)
        console.log(numPadArray)
      }
      else if (mouseX <= 250 + 20 && mouseX >= 250 - 20 && mouseY <= 200 + 20 && mouseY >= 200 - 20) {
        numPadArray.push(4)
        console.log(numPadArray)
      }
      else if (mouseX <= 300 + 20 && mouseX >= 300 - 20 && mouseY <= 200 + 20 && mouseY >= 200 - 20) {
        numPadArray.push(5)
        console.log(numPadArray)
      }
      else if (mouseX <= 350 + 20 && mouseX >= 350 - 20 && mouseY <= 200 + 20 && mouseY >= 200 - 20) {
        numPadArray.push(6)
        console.log(numPadArray)
      }

      else if (mouseX <= 250 + 20 && mouseX >= 250 - 20 && mouseY <= 250 + 20 && mouseY >= 250 - 20) {
        numPadArray.push(7)
        console.log(numPadArray)
      }
      else if (mouseX <= 300 + 20 && mouseX >= 300 - 20 && mouseY <= 250 + 20 && mouseY >= 250 - 20) {
        numPadArray.push(8)
        console.log(numPadArray)
      }
      else if (mouseX <= 350 + 20 && mouseX >= 350 - 20 && mouseY <= 250 + 20 && mouseY >= 250 - 20) {
        numPadArray.push(9)
        console.log(numPadArray)
      }
      else if (mouseX <= 300 + 20 && mouseX >= 300 - 20 && mouseY <= 300 + 20 && mouseY >= 300 - 20) {
        numPadArray.push(0)
        console.log(numPadArray)
      }
      else if (mouseX <= 250 + 20 && mouseX >= 250 - 20 && mouseY <= 300 + 20 && mouseY >= 300 - 20) {
        // x
      }
      else if (mouseX <= 350 + 20 && mouseX >= 350 - 20 && mouseY <= 300 + 20 && mouseY >= 300 - 20) {
        if(numPadArray == correctArray) {
          text("Correct!", 250, 80)
          inventory.push(2)
        } else {
          numPadArray = []
          text("wrong!", 250, 80)
        }
      }

    }

    
  }