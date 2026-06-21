// const arr1 = [10,20,30,0,0];

// const arr2 = arr1;

// arr2[2] = 1245;
// console.log(arr1);
// console.log(arr2);

// const arr = [[10,20,30],[40,50,60],[70,80,90]];
// console.log(arr)
// console.log(arr.length) // prints number of rows

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(arr[0][1])
// console.log(arr[0].length);
// for(let row = 0; row<arr.length; row++){
//     for(let col = 0; col<arr[row].length; col++){
//         console.log(arr[row][col])
//     }
// }

// for(let raw of arr){
//     for(let col in raw){
//         console.log(col)
//     }
// }

// const arr = [10,20,30,40,50];
// const arr2 = [90];

// const num = arr.concat(arr2);
// console.log(num);

// const num1 = [10,20,30,40,50,60];
// const num2 = [70,80,90,100,110];
// // spread operator
// const num = [...num1,...num2];
// console.log(num);


// destructuring operator
const num = [10,20,30,40,50];
const [first,second,third,...remaining] = num;
// rest operator
console.log(thrid)

// important topic