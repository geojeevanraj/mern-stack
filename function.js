// function sum(a, b) {
//     return a + b;
// }

// // console.log(sum(5, 10));

// var a = 5;
// var b = 1;

// console.log(sum(a, b));

// Arrow function

// const multiply = (x, y) => x*y;
// var x = 5;
// var y = 10;

// console.log(multiply(x, y));


// function double(num) {
//     return num * 2;
// }

// let arr = [2,3,4,5,6,7];
// let doubledArr = arr.map(double);
// console.log(doubledArr);
// const tripledArr = arr.map(num => num * 3);
// console.log(tripledArr);


// function isEven(num) {
//     return num % 2 === 0;
// }

// var num = 4;
// console.log(isEven(num));

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter(isEven);
// console.log(evenArr);

// let array = [13,15,20,25,27];
// const multiply = (x) => x * 5;
// console.log(array.map(multiply));

let array1 = [1,2,3,4,5,6];
let sum = array1.reduce((product, current) => product * current, 1);
console.log(sum);