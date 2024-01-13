var arr = [1, 2, 3, 4, 5, 6, 7];

let calculateSum = (array) => array.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(calculateSum(arr));
