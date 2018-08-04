class cell{
	constructor(x,y,length){
		this.x=x;
		this.y=y;
		this.length=length;
		this.show();
	}
	show(){
		context.strokeStyle="black"
		context.lineWidth=6;
		context.rect(this.x,this.y,this.length,this.length);
	}
}