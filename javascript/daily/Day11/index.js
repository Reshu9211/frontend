let obj={
    name:"reshu",
    course:"B.tech",

};
console.log(obj);
 
let user={
    name:"rahul",
    proffession:"teacher",
    hobbies:["reading","dancing"],
    bio:function(){
        console.log(`hii ! i am ${this.name},my proffession: ${this.proffession}`)
    }
};
console.log(user.bio());


function Car(make,model,year)
{
    this.make=make;
    this.model=model;
    this.year=year;
}
const car1 = new Car('eagle','talom tsi',1993);
console.log(car1);
const car2 = new Car('Tata',' tsi',1990);
console.log(car2);
const car3 = new Car('suzuki','alto',1980);
console.log(car3);

class rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
const square=new rectangle(10,10);
console.log(square);

