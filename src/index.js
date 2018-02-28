module.exports = function count(s, pairs) {
	var N=1;
	var array=[];
	var counter=0;
	for(let i=0;i<pairs.length;i++){

		array.push(pairs[i][0]);
		N*=pairs[i][0];
	}
	if(N>100000) return "no solution for bigs number";
	//console.log(array);

	for(let i=0;i<s.length;i++){
		
		let mask=Number(s[i]);
		let simpleMultipliers;
		//console.log(mask);

		for(let j=1;j<N+1;j++){
			simpleMultipliers=getSimpleMultipliers(j+i);
			//console.log(simpleMultipliers);
			let flag=false;
			for(let key in simpleMultipliers){
				//console.log(array.indexOf(Number(key)));
				if(array.indexOf(Number(key))==-1){
					flag=true;
				}			
			}
			
			if(mask){
				if(flag){
					counter++;
				}
			} else{
				if(!flag){
					counter++;
				}
			}
			
		}	
		
		
	}
	//console.log(N);
  // your implementation
  return counter;
}

function getSimpleMultipliers(num){
	let tempArr=[],tempObj={};
	if(num==1) return {"1":1}
	for(let i =2; i<=num;i++){
		if(num%i === 0){
			tempObj[i]=1;
			num=num/i;
		}

		while(num%i ===0){
			num=num/i;
			tempObj[i]++;
		}
		
	}
	return tempObj;
}