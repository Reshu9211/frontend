//question 1
let n1=2;
let n2=5;
let sum=n1+n2;
console.log(sum)


//question 2
let n3=5;
let n4=3;

if(n3<10 && n3>n4){
    console.log(true);
}
else{
    console.log(false);
}

//question 3
let n5=12;
let n6=20;

if(n5%10 === 0 && n6%10 === 0){
    console.log(ture);
    
}
else if(n5%10 !==0 && n6%10 !== 0)
{
    console.log(false);
}
else{
    console.log(true);
}

//question 4
let n7  = 4567; 

let first_digit = n7 / 1000 | 0


console.log(first_digit); 

// question 5
let n8 = 4567; 


let last_digit = n8 % 10;


console.log(last_digit); 
  
//question 6

let A = 2;  
let B = 9;  

let remainder = B % A;


console.log(remainder); 

//question 7

let C = 2; 
let D = 5;  


let result = C * D;


console.log(result);  

//question 8



let num1 = 50;
let num2 = 20;
let num3 = 100;

let totalMarks = num1 + num2 + num3;
let averageMarks = (totalMarks / 3).toFixed(2); 


console.log(totalMarks, averageMarks);
