class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.3
        }
        this.body = Bodies.circle(x,y,10,options)
        World.add(world,this.body)
    }
    



draw(){
    ellipseMode(RADIUS)
    ellipse(0,0,10,10)

}

update(){
    if(this.body.position.y > 400){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
    
}
}