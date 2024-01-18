const studentNames = ["Alice", "Bob", "Charlie", "David", "Eva"];

const firstTwoNames = [...studentNames.slice(0,2)];
const restOfNames = [...studentNames.slice(2)];
console.log(`first Two Names = ${firstTwoNames} \nrest Of Names = ${restOfNames}`);

