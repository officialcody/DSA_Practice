/***
 * Write a function in Javascript to print all the values greater than 25 in the given object.

const Values = { a: 40, b: 25, c: 35, d: 50, e: 15, f: 10,};

Sample Output:
Value of a is 40
 */

function greaterThan25(obj){
  return Object.values(obj).filter(value => value > 25);
}
const Values = { a: 40, b: 25, c: 35, d: 50, e: 15, f: 10,};

console.log(greaterThan25(Values));