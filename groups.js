function make2DArray(row,col){
	let arr=new Array(row);
	for(let i=0;i<row;i++){
		arr[i]=new Array(col);
	}
	return arr;
}

function transpose2DArray(row,col,arr){
	let transpose=make2DArray(col,row);
	for(let i=0;i<row;i++){
		for(let j=0;j<col;j++){
			transpose[j][i]=arr[i][j];
		}
	}
	return transpose;
}
function makeGroup(x1,y1,x2,y2,allCells){
	let cells=new Array(9);
	let k=0;
	for(let i=x1;i<x2+1;i++){
		for(let j=y1;j<y2+1;j++){
			cells[k]= allCells[i] [j];
			cells[k].group=cells;
			k++;
		}
	}
	return cells;
}

function writeToGroup(list,group){
	for(let i=0;i<list.length;i++){
		group[i].write(list[i]);
	}
}
function makeBooleanList(size){
	let list=new Array(size);
	for(let i=0;i<list.length;i++){
		list[i]=false;
	}
	return list;
}