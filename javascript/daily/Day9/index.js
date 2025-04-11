// function num(name)
// {
//     console.log("hey.....this is regular function",name);
    
// }
// num("reshu");
// // arrow function

const fun1=()=>{
    console.log("hey.........this is arrow function");
    
};
fun1();
//function expression

const fun2=function(){
    console.log("hey.....this is third function or functiona; expression");
    
};
fun2();

// function showmessage(){
//     alert("hello world");

// }
// showmessage();

  function num1(year)
  {
    return year;
  }
  console.log(num1(2015));
   
  //try...........
  function math(x,y)
  {
    return x*y;
  }
  console.log(math(2,5));

  //question1
   function div()
   {
    console.log("zero parametre");
    
   }
   div();

   //question2
   const fun3=()=>{
    console.log(" arrow function with zero parametre");
    
};
fun3();

//question3

function sum(firstName, lastName, age) {
    return `${firstName} ${lastName} is ${age} years old.`;
  }
  
 
  let statement = sum("A", "B", 99);
  console.log(statement);
  

  // nasted function

function outer(length,breadth){
    function inner()
    {
       console.log(length*breadth);
       
    }
    inner();
}
outer(5,5)

  


  
