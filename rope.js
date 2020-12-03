class Rope{
    constructor(a,b, point){
      
        var options = {
        bodyA : a, 
        bodyB : b,
        pointB : point,
        stiffness : 0.04,
        length : 7
        }
       this.rope = Constraint.create(options)
       this.point = point
        World.add(world,this.rope)
    }
    display(){
        //if(this.rope.bodyA)
        push();
        strokeWeight(3);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+ this.point.x,this.rope.bodyB.position.y + this.point.y)
        pop();
    }
}