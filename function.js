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

// let array1 = [1,2,3,4,5,6];
// let sum = array1.reduce((product, current) => product * current, 1);
// console.log(sum);

//sum of even triple numbers
// let arr = [1,2,3,4,5,6];
// let tripledArr = arr.map(num => num * 3);
// let evenArr = tripledArr.filter(num => num % 2 === 0);
// let sumOfEvenTriple = evenArr.reduce((sum, current) => sum + current, 0);
// console.log(sumOfEvenTriple);



// let arr = [1,2,3,4];
// const [one, two] = arr;
// console.log(two);

// let b = [1,2,3,4];
// const [ome, ... two] = b
// console.log(two);

//spread

// let a = [1,2,3,4];
// const [one, ... two] = a;
// console.log(two);
// let num = [...a,8,12];
// console.log(num);

// let obj1 = {x: 1, y: 2};
// let obj2 = {z: 3, w: 4};
// let spread = {...obj1, ...obj2};
// console.log(spread);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const success = true;
//     if (success) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected.");
//     }
// },2000);
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   let obj1 = {name: 'virat', age: 38, country: 'India'};
//     let {name, age, country} = obj1;
//     console.log(name, age, country);


// string

// let name = 'geo';
// let age = 20;
// console.log(`My name is ${name} and I am ${age} years old.`);

//stack

// const mul = (a,b) => {
//     return a * b;
// }

// const square = (num) => {
//     return mul(num, num);
// }

// const print = (num) => {
//     let s = square(num);
//     console.log(s);
// }
// print(4);
// print(5);

console.log('first');
Promise.resolve().then(console.log('from promise'));
setTimeout(() => {
    console.log('from setTimeout');
},2000);

console.log('last');
