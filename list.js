
function randomise(number){//returns randomly number from 0 to (number-1) inclusive
	return Math.floor((Math.random() * number));
}
function shuffle(arr){
	let randomArr=copyArr(arr);
	let length=arr.length;
	for(let i=0;i<length;i++){
		target=randomise(length);
		temp=randomArr[i];
		randomArr[i]=randomArr[target];
		randomArr[target]=temp;
	}
	return randomArr;
}
function makeRandomList(){
	let list=new Array(9);
	let numbers=new Array(9);
	for(let i=0;i<9;i++){
		numbers[i]=i+1;
	}
	for(let i=0;i<9;i++){
		list[i]=shuffle(numbers);
	}
	return list;
}