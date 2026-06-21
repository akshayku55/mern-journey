// stores hetrogeneous type of data

// let user = ["Akshay",21,true,{name:"Mehak"}];
// console.log(user);

// // can i update the value inside the array
// user[0] = "Lakshay";
// console.log(user)

// let num = [10,20,30,40,50];

// push -> insert
// pop -> delete

// num.push(2200);
// console.log(num)

// num.pop()
// console.log(num)

// num.unshift(1,2) // adds element in the front
// console.log(num)

// num.shift()
// console.log(num)

// console.log(typeof num) // array is a object
// number -> 8 bytes

// let num = [10,20,30,40,50,60];

// for(let x of num){
// //     console.log(x)
// // }

// console.log(num.slice(1,3)) // no change in original array, creates a new copy of array
// console.log(num)

// console.log(num.splice(1,3)) // changes in original arry
// console.log(num)

// console.log(num.splice(1,3,30,40,500))
// console.log(num)

let num = [10,20,30,40,50,0,0];
num.splice(3,0,31,32);
console.log(num)