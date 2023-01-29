
let exitImage
let classroomImage
let libraryImage
let lockersImage
let turfImage
let honorCodeImage

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

    image(roomArr[num], 0,0,650,500)
    
}