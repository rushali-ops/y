//Paper.js
class paper{
	constructor(x,y,r){
		var options ={
            
            restitution :0.3,
            friction :0,
            density :1.2
            
        }
		this.body=Bodies.circle(330,110,50,options);
        
        this.image=loadImage("paper.png");
        World.add(world, this.body);

	}
    display(){
        var paperpos=this.body.position;
        paperpos.x=mouseX;
        paperpos.y=mouseY;
       
        push();
        translate(paperpos.x,paperpos.y);
        
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
    }
}
function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    }

}