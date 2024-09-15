const array = [1,2,3,4];
const sameArray = array;
sameArray.push(5);

console.log(array === sameArray); //true

const array = [1,2,3,4];
const differentArray = [...array, 5];
console.log(array !== differentArray); //false