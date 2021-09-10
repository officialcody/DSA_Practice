/**
 * QUESTION: The function foldingPaper should return the thickness (in meters) of a piece of paper after folding it n number of times.
 * The paper starts off with a thickness of 0.0005m.
 * 
 * INPUT:
 *  const n = 1;	
 * 
 * OUTPUT:
 *  0.001m
 */
const foldingPaper = (n) => {
  const initialThickness = 0.0005;
  return `${initialThickness * Math.pow(2, n)}m`;
};

function checkTestCase(num, n){
  const result = foldingPaper(n);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, 1);
checkTestCase(2, 4);
checkTestCase(3, 8);
checkTestCase(4, 21);