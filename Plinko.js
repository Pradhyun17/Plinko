class Plinko {
    constructor(x,y,r){
        var options = {
             isStatic:true       
        }
        this.body = Bodies.circle(x,y,r,options)
        this.radius = r;
        World.add(world, this.body);
    }

    display(){
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}