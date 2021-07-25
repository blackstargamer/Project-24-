class BouncyBall{
	constructor(x,y,r)
	{
		 var options={
		 	"restitution":0.3,
		 	"friction":5,
		 	"density":1
		 }

		// var options={
		// 	restitution:5,
		// 	friction:5
		// 	density:20
		// }

		// var options={
		// 	restitution:0.3,
		// 	friction:5,
		// 	density:1
		// }

		// var options{
		// 	restitution:5,
		// 	friction:5,
		// 	density:20
		// }


		this.x=x;
		this.y=y;
		this.r=r
		//  this.body=Bodies.ellipse(this.x, this.y, (this.r-20)/2, options)
		//  World.add(world, this.body);

		 this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		 World.add(world, this.body);

		// this.body=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

		
		// this.body=Bodies(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

	}
	display()
	{
		    var bouncyBallPos=this.body.position;		
		    push()
		    translate(bouncyBallPos.x, bouncyBallPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			 ellipse(0,0,this.r, this.r);
			// circle(0,0,this.r, this.r);
			// rect(0,0,this.r, this.r);
			// body(0,0,this.r, this.r);
			pop()
	}

}