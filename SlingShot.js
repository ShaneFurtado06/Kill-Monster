class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:250,
            'stiffness':1
        }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body);
    }

    release(){
        this.body.bodyA=null;
    }

    reAttach(bodyA){
        this.body.bodyA=bodyA;
    }
    display(){
        var posA=this.body.bodyA.position;
        var posB=this.pointB;

        push ();
            line (posA.x,posA.y,posB.x,posB.y);
        pop ();
    }
}