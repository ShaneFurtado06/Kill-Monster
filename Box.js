class Box{
    constructor(x,y,w,h){
        var options={
            'friction':1,
            'restitution':0,
            'density':2.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        if(this.body.speed>10&&this.body.speed<20){
            score++;
        }
        
        push ();
            translate (pos.x,pos.y);
            rectMode(CENTER);
            strokeWeight(2);
            stroke("red");
            fill ("black");
            rect(0,0,this.w,this.h);
        pop ();    

    }
}