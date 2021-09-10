/**
 * QUESTION: The function highestScore should return the highest score from an array of scores.
 * 
 * INPUT:
 *  const scores = [20, 32, 51, 103, 88, 26];
 * 
 * OUTPUT:
 *  103
 */

function highestScore(scores) {
  scores.sort(function(a,b){return a - b});
  return scores[scores.length -1];
}

function highestScore_2(scores) {
  return Math.max(...scores);
}

function checkTestCase(num, array){
  const result = highestScore(array);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [20, 32, 51, 103, 88, 26]);
checkTestCase(2, [24, 3, 15, 52, 4, 9, 55, 18, 45, 10]);
checkTestCase(3, [32, 78, 9, 109, 69, 9, 1, 12]);