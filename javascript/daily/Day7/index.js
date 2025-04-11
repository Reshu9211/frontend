let str1="hi prepbytes ";

let result=str1.slice(3)
console.log(result)


// arrays............

 let arr1=[1,2,3,4,5,6];
 console.log(arr1)

//push............

let array=["RADHA","REEMA","SEEMA"]
let res1=array.push("RAM");
console.log(res1);
console.log(array);

let arr2=["jarvis","the","developer"]
let res2=arr2.slice(1,2);
console.log(res2);

//tostring...............
let arr3=["jarvis","the","developer"]
let res3=arr3.toString();
console.log(res3);


//shift...............

let arr4=["hey","i","am","developer","reshu","ruchi"]
let res4=arr4.shift(3);
 console.log(res4);
 console.log(arr4)

 let ar4=["hey","i","am","developer","reshu","ruchi"]
 let rs4=ar4.unshift("hlo");
  console.log(rs4);
  console.log(ar4)




//map.........

let arr5=[1,2,3,4,5,6];
// let res=arr.map((y)=>y*3)
let res5=arr5.map(Math.cbrt)
 console.log(res5)


//pop

let array1=["RADHA","REEMA","SEEMA"]
let res6=array.pop();
console.log(res6);
console.log(array1);


//filter

let arr=["hey","i","am","developer","reshu","ruchi"]
let res=arr.filter(y=>y.length>3);
 console.log(res);
 console.log(arr);

 let arr7=[1,2,3,4,5,6];
let res7=arr7.find(x=>2==2)
console.log(res7);

let arr8=[1,2,3,4,5,6];
let res8=arr8.forEach(x=>2==2)
console.log(res8);

let arr9=[1,2,3,4,5,6];
let res9=arr9.findIndex(x=>5)
console.log(res9);








