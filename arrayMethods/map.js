// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   let fullname = persons.map(function(person){
//     return `${person.firstname} ${person.lastname}`
//   });

//   console.log(fullname);


// Write a function that takes an array of numbers as input and uses the map() function to return a new array where each element is doubled.

// function doubledNumber(inputArray){
//     let doubleArray = inputArray.map(function(array){
//         return array *2;
//     });
//     return doubleArray;
// }

// let result = doubledNumber([1,2,3,4,5,6]);
// console.log(result);

// Create a function that takes an array of numbers and uses the map() function to return a new array where each element is squared.

    // function squaredNumber(inputNumber){
    //     let squaredArray = inputNumber.map(function(array){
    //         return array * array;
    //     });
    //     return squaredArray;

    // }

    // let result = squaredNumber([1,2,3,4,5,6]);
    // console.log(result);

    // Given an array of strings, use the map() function to convert each string to uppercase and return a new array.

//     let stringArray = ["good","bad"];
//    let result = stringArray.map(function(array){
//         return array.toUpperCase();
//     });

//     console.log(result);


// Write a function that takes an array of strings and uses the map() function to create a new array containing the lengths of each string.

    // function stringArray1(inputString){
    //     let stringLength = inputString.map(function(array){
    //         return array.length
    //     })
    //     return stringLength;
    // }

    // const strings = ["apple", "banana", "orange", "grape"];
    // const result = stringArray1(strings);
    // console.log(result);

    // Given an array of strings, use the map() function to reverse each string and return a new array.

        // function reverseString(inputString){
        //     let stringReverse= inputString.map(function(array){
        //         return array.reverse();
        //     });

        //     return stringReverse;
        // };

        // const string = ["apple","banana","orange","grapes"];
        // const result = reverseString(string);

        // console.log(result);

        // JS find max number in array: [20, 50, 60, 10];

        const array= [20, 50, 60, 10];

        // const result = Math.max(array);

        const result =array.map(function(arr){
            return Math.max(array[arr]);
        });

        console.log(result);

