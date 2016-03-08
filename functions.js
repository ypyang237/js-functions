/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(n){
   // var stringed = n.toString();
   // return stringed;
  var stringed = n+'';
  return stringed;
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 function increase(n){
  var added = n+=1;
  return added;
 }


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n){
  var number = n-=1;
  return number;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
  var number = x+y;
  return number;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x,y){
  var number = x-y;
  return number;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
  var number = x*y;
  return number;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
  var number = x/y;
  return number;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
  var number = x*x;
  return number;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation,x,y){
  if (operation === "add") {
    number = x + y;
    console.log(x+' + '+y+' = '+number);
    return number;
  }
  else if (operation === "subtract") {
    number = x - y;
    console.log(x+' - '+y+' = '+number);
    return number;

  }
  else if (operation === "multiply") {
    number = x * y;
    console.log(x+' * '+y+' = '+number);
    return number;
}
  else if(operation === "divide") {
    number = x / y;
    console.log(x+' / '+y+' = '+number);
    return number;
  }

 }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a,b){

  return (a > b);
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b){

  return (a < b);
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a,b){

  return (a === b);
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(a,b){
if (a > b){
  return b;
}
return a;
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(a,b){
if (a > b){
  return a;
}
return b;
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n){

  return (n%2 === 0);
}


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){

  return (n%2 !== 0);
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score,total){
var percentage = Math.floor(score/total * 100);

if (percentage >=90){
  grade = 'A';
}
else if (percentage >=80){
  grade = 'B';
}
else if (percentage >=70){
  grade = 'C';
}
else if (percentage >=60){
  grade = 'D';
}
else{
  grade = 'F';
}

return grade;
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var restaurant = {
  reviews: 1
};

function incrementReviews(restaurant){
if (restaurant.reviews){
  restaurant.reviews +=1;
}
else{
  restaurant.reviews = 1;
}
return restaurant;
}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2){
  var newString = word1 + " " + word2;
  return newString;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  return {
    circumference: 2 * radius * Math.PI,
    area: Math.PI * radius * radius
  };

}