//filter even numbers 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers.filter(checkNumber);

function checkNumber(even){
    if(even%2 ==0 || even === 0){
      return even;
    }
}

console.log(result);