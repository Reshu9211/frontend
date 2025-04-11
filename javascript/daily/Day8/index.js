//QUESTION 1
console.log("hello world");
const countcharacter=()=>{
    let s='AbaDd';
    let countA=0;
    let countD=0;
    for( let i=0; i<s.length;i++){
        if(s[i]==="A"){
            countA++;
        }
        else if(s[i]==="D"){
            countD++;


        }

    }
    return[countA,countD];

};
console.log(countcharacter());

//QUESTION 2 PATTERN 

// 1
// 1 2
// 1 2 3
// 1 2 3 4 


 const row=10;
 for(let i=1; i<=10;i++){
    let pattern =" ";
    for(let j=1; j<=i;j++){
      pattern += j + " ";
    }
    console.log(pattern);
 }
 
 
// question 3

let arr=[[1,2],[3,4],[5,6]];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
        
    }
    
}

//question 4
 let str="live ";
 let str1="session";
 let res=str.concat(str1)
 console.log(res);

 //question 5

 let arr1=[11,22,56,78,98,60,34,33];
 let largest=arr1[0];
 for(let i=1;i<=arr1.length;i++){
    if(arr1[i]>largest){
        largest=arr1[i]

    }
   
    
 }
 console.log("this is the laargest number:",largest);

 //question 6

 let arr2=[4,2,45,44,7,78,4,2,1,9,1]
 let duplicates=[];
 for(let i=0;i<arr2.length;i++){
    for (let j =i+1; j < arr2.length; j++) {
        if(arr2[i]===arr[j]&& !duplicates.includes (arr2[i]))
        {
            duplicates.push(arr2[i]);
        }
    }
 }
 console.log(duplicates);
 console.log(arr2);

 //question 7

 let str2="amanaman"
 const count={};
 for(let char of str2){
    count[char]=(count[char]||0)+1;

 }
 let res1=" ";
 const keys=Object.keys(count).sort();
 
 for(let char of keys){
    if(count[char]>1){
        res1+=char+count[char];
    }
 }
 console.log(res1);
 
 
 




