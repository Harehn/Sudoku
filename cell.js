class cell{
	constructor(x,y,length,number){
		this.x=x;
		this.y=y;
		this.length=length;
		this.show();
		number?this.number=number:{};
	}
	show(){
		context.strokeStyle="black";
		context.fillStyle="black";
		context.lineWidth=1;
		context.rect(this.x,this.y,this.length,this.length);
		context.stroke();
	}
	write(num){
	context.fillStyle="black";
	context.font="30px Arial";
	context.fillText(num+"",this.x+(this.length/3),this.y+(this.length*2/3));
	this.number?{}:this.number=num;
	}
}