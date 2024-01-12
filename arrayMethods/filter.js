//filter even numbers 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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


// let stringResult = names.filter((name)=>name.startsWith("S"));

// console.log(stringResult);

// Given an array of strings, filter out the strings that have more than 5 characters.

const words = ["apple", "banana", "kiwi", "orange", "grape"];

// let lenghtString = words.filter(function(word){
//     return word.length > 5;
// })

// console.log(lenghtString);


//Given an array of objects representing people with their ages, filter out people who are below 18 years old.
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 },
  ];

//   let objResult = people.filter(function(age){
//     return age.age <=18;
//   })

//   console.log(objResult);

//Given an array that may contain null or undefined values, filter out those values.

const mixedValues = [1, null, "hello", undefined, 42, null, "world"];

// let nullUndefine = mixedValues.filter(function(data){
//     return data!=null || data !=undefined
// });

// console.log(nullUndefine);


// Given an array of numbers, filter out numbers greater than 50.

const numbers1 = [10, 25, 60, 40, 75, 90, 30];

let greterNum = numbers1.filter(function(num){
    return num > 50;
})

console.log(greterNum);
