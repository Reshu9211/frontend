//Q1. Count Characters
//Sample Input 
// AbaDd 
// Sample Output 
// 1 1
function countCharacters(A) {
    let countA = 0;
    let countD = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') countA++;
        else if (S[i] === 'D') countD++;
    }

    return [countA, countD];
}

let A = "AbaDd";
console.log(countCharacters(A)); 

 //Q3. Count the Vowels 
 //Example 
// Sample Input 
// Prepbytes 
// Sample Output 
// 2 

 let a="prepbytes";
 let count =0;
 for (let i=0;i<=a.length;i++)
 {
    let ch=a[i];
    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U')
    {
        count++;
    }
 }
 console.log(count)

 //Q4. Concatenate the Strings
 //Sample Input 
// Prep bytes 
// Sample Output 
// Prepbytes 
 
 let c="prep";
 let d="bytes";
 let res=c.concat(d)
 console.log(res);

 //Q5. Find Length 
//  Sample Input 
// CeDqe 
// Sample Output 
// 5 
   
 let e="CeDqe";
 let res1=e.length
 console.log(res1);


// question 6
//Find the Winner 
//Sample Input 1 
// ADDAAADDDDD 
// Sample Output 1 
// Danish 
// Sample Input 2 
// ADDAAADD 
// Sample Output 2 
// Draw

let f=prompt("enter the string of A abd D")
let acount=0;
let dcount=0;

for(let i=0;i<f.length;i++){
    if(f[i]==='A')
    {
        acount++;
    }
    else if(f[i]==='D')
    {
        dcount++;
    }
}

if(acount>dcount){
    console.log("aditiya");
    
}
else if (acount<dcount)
{
    console.log("danish");
    
}
else
{
    console.log("draw");
    


}

//Q7. Join Strings 
// Sample Input 
// PrepBytes Technologies 
// Sample Output 
// PrepBytesTechnologies
function joinStrings(R, P) {
    return R + P;
}


let R = "prepbytes Technologies";
let P = "World";
console.log(joinStrings(S, P)); 

// Q8. Plaindrome Check 
// Sample Input 1 
// Naman 
// Sample Output 1 
// False 
// Sample Input 2 
// naman 
// Sample Output 2 
// True 

let str3="Naman"
let rev="";
for(let i=str3.length-1;i>=0;i--)
{
    rev=rev+str3[i];
}
if (str3===rev)
{
    console.log("true");
    
}
else
{
    console.log("false");
    
}

//Q9. Reverse the String 
//Sample Input 
// I am utkarsh raj 
// Sample Output 
//jar hsraktu ma I 

let str4="i am utkarsh raj";
let rev1="";
for(let i=str4.length-1;i>=0;i--)
{
    rev1=rev1+str4[i];
}
console.log(rev1);

//Q10. Match the Strings 
//Sample Input 
// Prepbytes Prepbytes 
// Sample Output 
// YES 

function string_match(s1,s2){
    if(s1===s2)
    {
        return "yes";
    }
    else{
        return "no"
    }


}
let s1="prepbytes";
let s2="prepbytes";
console.log(string_match(s1,s2));


//Q11. String Replace 
// Sample Input 
// Hi, I am You. You Prepbytes 
// Sample Output 
// Hi, I am Prepbytes. 

function Replace(S, pattern, text) {
    return S.replace(pattern, text);
}

// Example usage:
let S = "Hi, I am You. You Prepbytes";
let pattern = "You";
let text = "Prepbytes";

console.log(Replace(S, pattern, text));

//Q12. Split the String
// Sample Input 
// I am utkarsh raj 
// Sample Output 
// I 
// am  
// utkarsh  
// raj 

function Split_the_String(str) {
    return str.split(" ");
}

let str = "I am utkarsh raj";
console.log(Split_the_String(str));


//Q13. Count the Vowels and Consonants 
// Sample Input 
// Prepbytes 
// Sample Output 
// 2 7 
let a1 = "prepbytes";
let vowel = 0;
let consonant = 0;
for (let i = 0; i < a1.length; i++) {  
    let ch = a1[i];  
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
        vowel++;
    } else {
        consonant++;
    }
}
console.log(vowel); 
console.log(consonant);  

