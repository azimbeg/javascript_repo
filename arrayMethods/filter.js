//filter even numbers 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = numbers.filter(function(even){
//     if(even%2 ==0 || even === 0){
//         // console.log(even);
//       return even;
//     }
// });

// console.log(result);

// filter odd numbers;

// let result2 = numbers.filter(function(odd){
//     if(odd%2!=0){
//         return odd;
//     }
// }) ;

// console.log(result2);


// Given an array of names, filter out the names that start with the letter "S".

const names = ["Sam", "Sarah", "John", "Susan", "Mike"];


let stringResult = names.filter((name)=>name.startsWith("S"));

console.log(stringResult);

