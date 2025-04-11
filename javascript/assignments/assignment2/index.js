//one

let M = parseInt(prompt("Enter your marks:")); 

switch (true) {
    case (M <= 10):
        console.log("E");
        break;
    case (M <= 20):
        console.log("D");
        break;
    case (M <= 30):
        console.log("C");
        break;
    case (M <= 40):
        console.log("B");
        break;
    case (M <= 50):
        console.log("A");
        break;
    default:
        console.log("Invalid marks");
}
//two
let C = 'E';  

switch(C) {
    case 'P':
    case 'p':
        console.log("PrepBytes");
        break;
    case 'Z':
    case 'z':
        console.log("Zenith");
        break;
    case 'E':
    case 'e':
        console.log("Expert Coder");
        break;
    case 'D':
    case 'd':
        console.log("Data Structure");
        break;
    default:
        console.log("Invalid Input");
}

//three
let A = 2; 
let B = 5;  
let D = 4;  

if (A === B && B === D) {
    console.log(-1); 
} else {
    let max = Math.max(A, B, D); 
    console.log(max); 
}

//four

let X=2;
let Y=9;
let Z=27;
let secondSmallest;

if ((X > Y && X < Z) || (X > Z && X < Y)) {
    secondSmallest = X;
} else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
    secondSmallest = Y;
} else {
    secondSmallest = Z;
}
console.log(secondSmallest);

//five
let s1 = 60;  
let s2 = 100; 
let s3 = 20;  


if (s1 + s2 + s3 !== 180) {
    console.log("Invalid triangle angles");
} else {
   
    if (s1 > 90 || s2 > 90 || s3 > 90) {
        console.log("obtuse");
    } else {
       
        console.log("acute");
    }
}



