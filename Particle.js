class Particle {
    constructor(x,y){
        var options = {
             isStatic:false,
             restitution:0.5,
             friction:0.01      
        }
        this.body = Bodies.circle(x,y,8,options)
        this.radius = 8;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,15,15);
    }
}