// let age=prompt("what is your age")
// if(age>10 && age<20)
// {
//     console.log("your age is lies btwn 10 to 20");
    
// }
// else{
//     console.log("your age does not lies btwn 10 to 20");
    
// }

// let age=prompt("your age is lies between 10 to 20")

// switch (age) {
//     case' 12':
//         console.log("your age is 12 years old");
//         break;
//     case' 13':
//         console.log("your age is 13 years old");
//         break;
    
//     case '14':
//         console.log("your age is 14 years old");
//         break;
//     case '15':
//         console.log("your age is 15 years old");
//         break;
//      case '16':
//          console.log("your age is 16 years old");
//          break;
//     case '17':
//          console.log("your age is 17 years old");
//          break;
//      case' 18':
//             console.log("your age is 18 years old");
//             break;
//      case' 19':
//             console.log("your age is 19 years old");
//             break;
            
//      case '20':
//              console.log("your age is 20 years old"); 
//              break;
                       

                
//     default:
//         console.log("your age is not special");
//         break;
        
// }


// question 3

// let num=prompt("enter any number")
// if(num%2==0 && num%3==0)
// {
//     console.log("mumber is divisible by 2 and 3")
// }
// else 
// {
//     console.log("not divisible")
// }

// question 4

// let num=prompt("enter any number")
// if(num%2==0 || num%3==0)
// {
//     console.log("mumber is divisible by 2 and 3")
// }
// else 
// {
//     console.log("not divisible")

// }
//Q1. Count Characters
//Sample Input 
// AbaDd 
// Sample Output 
// 1 1
// let s="AbaDd";
// let b=[0,0];
//  for (let i=0;i<s.length;i++){
//     if(s[i]==='A'){
//         b[0]++;
//     }
//     else if(s[i]==='D')
//     {
//         b[1]++;
//     }
//  }
//  console.log(b);

 //Q3. Count the Vowels 
 //Example 
// Sample Input 
// Prepbytes 
// Sample Output 
// 2 
//  let a="prepbytes";
//  let count =0;
//  for (let i=0;i<=a.length;i++)
//  {
//     let ch=a[i];
//     if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U')
//     {
//         count++;
//     }
//  }
//  console.log(count)

 //Q4. Concatenate the Strings
 //Sample Input 
// Prep bytes 
// Sample Output 
// Prepbytes 
 
//  let c="prep";
//  let d="bytes";
//  let res=c.concat(d)
//  console.log(res);

 //Q5. Find Length 
//  Sample Input 
// CeDqe 
// Sample Output 
// 5 
   
//  let e="CeDqe";
//  let res1=e.length
//  console.log(res1);


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

// let f=prompt("enter the string of A abd D")
// let acount=0;
// let dcount=0;

// for(let i=0;i<f.length;i++){
//     if(f[i]==='A')
//     {
//         acount++;
//     }
//     else if(f[i]==='D')
//     {
//         dcount++;
//     }
// }

// if(acount>dcount){
//     console.log("aditiya");
    
// }
// else if (acount<dcount)
// {
//     console.log("danish");
    
// }
// else
// {
//     console.log("draw");
    


// }

//Q7. Join Strings 
// Sample Input 
// PrepBytes Technologies 
// Sample Output 
// PrepBytesTechnologies

// let str1="prepbytes";
// let str2="Technologies";
// let res2=str1.concat(str2);
// console.log(res2);

// Q8. Plaindrome Check 
// Sample Input 1 
// Naman 
// Sample Output 1 
// False 
// Sample Input 2 
// naman 
// Sample Output 2 
// True 

// let str3="Naman"
// let rev="";
// for(let i=str3.length-1;i>=0;i--)
// {
//     rev=rev+str3[i];
// }
// if (str3===rev)
// {
//     console.log("true");
    
// }
// else
// {
//     console.log("false");
    
// }

//Q9. Reverse the String 
//Sample Input 
// I am utkarsh raj 
// Sample Output 
//jar hsraktu ma I 

// let str4="i am utkarsh raj";
// let rev1="";
// for(let i=str4.length-1;i>=0;i--)
// {
//     rev1=rev1+str4[i];
// }
// console.log(rev1);

//Q10. Match the Strings 
//Sample Input 
// Prepbytes Prepbytes 
// Sample Output 
// YES 

// function string_match(s1,s2){
//     if(s1===s2)
//     {
//         return "yes";
//     }
//     else{
//         return "no"
//     }


// }
// let s1="prepbytes";
// let s2="prepbytes";
// console.log(string_match(s1,s2));


//Q11. String Replace 
// Sample Input 
// Hi, I am You. You Prepbytes 
// Sample Output 
// Hi, I am Prepbytes. 

// let string="hii,i am you.you";
// let pattern="you";
// let text="prepbytes";
// let result=string.replace(pattern,text);
// console.log(result);

//Q12. Split the String
// Sample Input 
// I am utkarsh raj 
// Sample Output 
// I 
// am  
// utkarsh  
// raj 

// let str5="i am utkarsh raj";
// let res5=str5.split();
// console.log(res5);

// //Q13. Count the Vowels and Consonants 
// // Sample Input 
// // Prepbytes 
// // Sample Output 
// // 2 7 
// let a1 = "prepbytes";
// let count1 = 0;
// let count2 = 0;
// for (let i = 0; i < a1.length; i++) {  
//     let ch = a1[i];  
//     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
//         ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
//         count1++;
//     } else { 
//         count2++;
//     }
// }
// console.log(count1); 
// console.log(count2);  

// array based questions

// let  arr=[1,2,3,4,5,6,7,8,9];
// let n=prompt("enter any number");
// arr.push(n);
// console.log(arr);


// let  arr=[1,2,3,4,5,6,7,8,9];
// let n1;
//  do 
//  {
//      n1=prompt("enter any number");
//     arr.push(n1);
    


//  }
//  while(n1!=0)
//     console.log(arr);
    



