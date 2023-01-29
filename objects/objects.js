class pen {
    constructor() {
          
      this.x = random(10,width - 10);
      this.y = random(10,80);
      
      this.speed = 1;
      
      this.weight = 10;
      
      this.type = type;
      
    }
    
    show() {
      
      if (this.type === "food") {
        
        fill(227, 64, 64)
        stroke(255)
        circle(this.x, this.y, this.weight);
  
      }
      else if (this.type === "poison") {
        
        fill(50, 184, 85)
        stroke(255)
        circle(this.x, this.y, this.weight);
  
      }
      
    }
      
    update() {
      
      this.show();
      this.move()
    
    }
    
    move() {
      
      this.y += this.speed;
      
      if (this.y > 600) this.speed = 0;
      
      
    }
    
  }
  
class lockerCode {

}

class honorCode {
    constructor(hasPen) {
        this.hasPen = hasPen
        this.signature = ""
    }

    update() {
        if (this.hasPen === true) {
            this.show()
        }
    }

    show() {
        
        fill(227, 64, 64)
        stroke(255)
        circle(this.x, this.y, this.weight)
    }
}