let honorCodeObj

function setup() {
    createCanvas(650,1000)
    honorCodeObj = honorCode(true, 100, 100, honorCodeImage).show()
}

function draw() {
    triangle(25,440, 55, 420, 55, 460)
}

