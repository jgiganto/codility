function solution(N) {
    
    let zeroCounter = 0;
    let oneCounter = 0;
    let tempZeroCounter = 0;
    let tempOneCounter = 0;
    let maxZeroCounter = 0;
    let binaryN = N.toString(2);
  console.log(binaryN);

    for (const bit of binaryN) {

        if(bit == '1') {
            oneCounter++;
        }

        if(bit == '0' && oneCounter > 0){
            zeroCounter++;
            tempOneCounter = oneCounter;                      
       
        }       

        if(oneCounter > tempOneCounter) {
            oneCounter = 1;
            tempOneCounter = 1;
           

            if ( zeroCounter > tempZeroCounter ) {
            tempZeroCounter = zeroCounter;
             zeroCounter = 0;
            }
        }

        
        
    }
    maxZeroCounter = tempZeroCounter;

    return maxZeroCounter;
}




const a = solution(561892);
console.log(a);
//Score 80% 
/* 
failed test
561892
74901729
1376796946
*/