class Villan{
    constructor(x,y,w,h){
        var options={
            'friction':1,
            'restitution':0,
            'density':1.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.body1=loadImage("Monster-01.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        if(this.body.speed>10&&this.body.speed<20){
            score++;
        }

        push ();
            translate (pos.x,pos.y);
            imageMode(CENTER);
            strokeWeight(2);
            stroke("red");
            fill ("black");
            image(this.body1,0,0,this.w,this.h);
        pop ();    

    }
}