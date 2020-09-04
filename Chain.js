class Chain {
    constructor(bodyA,bodyB){
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.4,
        lenght: 10,
    }
    this.Chain = Matter.Constraint.create(options)
    World.add(world,this.Chain);
}
    display(){
        var posA = this.Chain.bodyA.position;
        var posB = this.Chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y)
    }
}