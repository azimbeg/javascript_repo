const initialNumbers = [1, 2, 3, 4];

const addNumbersToArray=(...newNumbers)=>{
    let combinationOfNewArray = [...initialNumbers, ...newNumbers];
    return combinationOfNewArray;
}

let fisrtaddnumber = addNumbersToArray(5,7,8);
let secondAddNumber = addNumbersToArray(8,9,10);

console.log(fisrtaddnumber);
console.log(secondAddNumber);