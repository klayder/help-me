module.exports = function count(s, pairs) {
	var N=1;
	var array=[];
	var counter=0;
	
	
	for(let i=0;i<pairs.length;i++){

		array.push(pairs[i][0]);
		N*=pairs[i][0];
	}
	if(s.length>4||N>1000000000) return ""
	for(let maskLetter=0;maskLetter<s.length;maskLetter++){
		let mask=Number(s[maskLetter]);
		for(let i=1;i<N+1;i++){
			//console.log("i="+i+" :"+EuclidsAlgorithm(i,N));
			if(mask){
				if(EuclidsAlgorithm(i,N)===1){
					counter++;
					//console.log("check")
				}
			}else{
				if(EuclidsAlgorithm(i,N)!==1){
					counter++;
				}
			}
		}		
	}


  return counter;
}

function EuclidsAlgorithm(a,b){
	//console.log("evklid "+a+":"+b);
	while(a!==0&&b!==0){
		if(a>b){
			a=a%b;
		} else{
			b=b%a;
		}
	}
	return (a+b);

}


