class Box{
    constructor(x,y){
    var options={
    restitution:1,
    friction:0.8,
    density:1.0
    }
    this.body=Bodies.rectangle(x,y,50,50,options)
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    }
    display(){
       
        if(this.body.speed<3) {
            var pos= this.body.position;
            var angle=this.body.position;
            push()
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER)
            fill("blue")
            rect(0,0,this.width, this.height);
            pop()
          }else{
     World.remove(world,this.body);
      push();
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity);
      pop();
          }
        }
    }