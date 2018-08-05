
function makeGroup(x1,y1,x2,y2,allCells){
	let cells=new Array(9);
	let k=0;
	for(let i=x1;i<x2+1;i++){
		for(let j=y1;j<y2+1;j++){
			cells[k]= allCells[i] [j];
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
