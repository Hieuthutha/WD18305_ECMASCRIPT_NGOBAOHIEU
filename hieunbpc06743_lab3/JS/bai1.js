let multiply = (num1, num2) => num1 * num2;
multiply();
console.log(multiply(4, 5));


let toCelcius = (fahrenheit) => (5, 9) * (fahrenheit - 32);
console.log(toCelcius(100));


let padZeros = (num, totalLen) => {
  var numStr = num.toString();
  var numZeros = totalLen - numStr.length;
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};
console.log(padZeros(10, 5));


let power = (base, exponent) => {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 3));


let greet = (who) => console.log(`"Hello" ${who}`);
greet("World");
