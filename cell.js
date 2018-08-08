class cell{
	constructor(x,y,length,number){
		this.x=x;
		this.y=y;
		this.i=x/length;
		this.j=y/length;
		this.length=length;
		this.sorted=false;
		this.highlighted=false;
		this.show();
		this.group=null;
		number?this.number=number:{};
	}
	show(){
		context.strokeStyle="black";
		if(this.highlighted){
			context.fillStyle="rgb(255, 251, 204)";
			context.fillRect(this.x,this.y,this.length,this.length);
		}
		context.lineWidth=1;
		context.beginPath();
		context.rect(this.x,this.y,this.length,this.length);
		context.stroke();
		if(this.number){
			this.write(this.number);
			console.log(this.i,this.j);
		}
	}
	write(num){
	context.fillStyle="black";
	context.font="30px Arial";
	context.fillText(num+"",this.x+(this.length/3),this.y+(this.length*2/3));
	this.number?{}:this.number=num;
	}
	sort(){
		this.highlighted=true;
	}
	swapWith(AnotherCell){
		let temp=AnotherCell.number;
		AnotherCell.number=this.number;
		this.number=temp;
	}
}