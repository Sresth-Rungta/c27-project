class Bob{
    constructor(x,y){
      
       var options={
           restitution:0.3,
           friction:0.5,
           density:0.4
       }
      this.body= Bodies.circle(x,y,25,options)
      this.radius = 25
      World.add(world,this.body)
    }
   display(){
       fill("pink")
       ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y,25,25)
   }
   }