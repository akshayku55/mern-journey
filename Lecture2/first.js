// let firstNumber = 10;
// let secondNumber = 30;
// let thirdNumber = secondNumber;
// console.log(firstNumber,secondNumber,thirdNumber);

// let obj1 = {
//     name:"Akshay",
//     age:10
// };

// let obj2 =obj1; // obj2 points to obj1
// console.log(obj1.name);
// console.log(obj2.name);
// console.log(obj2);
// console.log(obj1);

// // implementation of javascript rules
// // like who will  tell js that let means this or this means that
// // in video it said browser implements but confused
// // ecmascript created the standard
// // primitive stores values
// // non primitive stores reference

// let a = 10;
// let b = 20;
// console.log(a==b);
// primitives are pass by value

// let obj1 = {
//     name:"Akshay",
//     age:20
// }
// let obj2 = obj1
// console.log(obj1==obj2);
// // non primitives are pass by rfrnce

// let obj1 = {
//     name:"Akshay",
//     age:20
// }
// let obj2 = {
//     name:"Akshay",
//     age:22
// }
// console.log(obj1==obj2)
// obj2.namee="LAkshay"
// console.log(obj2);

// const a = 10;
// const b = a;
// console.log(a==b);

// const a ={
//     name:"Akshay",
//     age:20
// };

// a.age = 22
// console.log(a);

// let const

// var: old method

// console.log(a);
// var a = 1;

// if(true){
//     var a = 10;
// }
// console.log(a);

// arithmetic operators
// console.log(3+4);
// console.log(3-4);
// console.log(3*4);
// console.log(3/5);
// console.log(10%2);
// console.log(10**4);

// assignment operator
// let a = 10;
// let b = 30;

// a = a+b;
// console.log(a);
// a += b;

//post increment 
// let a = 1;
// console.log(a++);

// pre increment
// console.log(++a)

// let a = 1;
// let k = a++;
// console.log(k)

// comparison operators
// console.log(10>5)
// console.log(10<5)
// console.log(10>=5)
// console.log(10<=5)

// bad coder habits
// console.log("10"==10) // type onversion
// // "10"== 10
// // 10 == 10
// console.log("Aksahy"=={name})

// console.log(String(30)+'8')
// console.log(null==undefined)

// js null is lossely equal to undefined and not to anyone
// console.log(null==0)
// console.log(null==1)
// console.log(null==false)

// console.log(null>=0)// when comaping null makes itself 0
// console.log(null<=0)
// console.log(null>0)
// console.log(null<0)
// // but why
// console.log(null==undefined)

// console.log(10===10) // first type check then value
// console.log(0==false);

// operator
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)

// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)

// console.log(true&&"Rohit")
// console.log(false||"ROhit")