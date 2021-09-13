/**
 * QUESTION: The function fruitSalad should slice each name of the fruit in half, sort 
 * the each chunks alphabetically and join them together to make a string.
 * 
 * INPUT:
 *  const str = ["apple", "pear", "grapes"];
 * 
 * OUTPUT:
 *  apargrapepesple
 */

const fruitSalad = (str) => {
  let chunks = [];
  str.forEach(s => {
    chunks.push(s.slice(0, s.length/2));
    chunks.push(s.slice(s.length/2, s.length));
  });
  return chunks.sort().join('');
};

function checkTestCase(num, str){
  const result = fruitSalad(str);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, ["apple", "pear", "grapes"]);
checkTestCase(2, ["raspberries", "mango"]);
checkTestCase(3, ["banana"]);