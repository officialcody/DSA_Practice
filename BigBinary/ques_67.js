/***
 * QUESTION: From the list of given json object of cricket players, find the bowler with best bowling average.
 * 
 * Note:
 *  In cricket, the lower the bowling average is, the better the bowler is performing.
 *  Return a value with 3 decimal points.
 */

function findBestBowlingAvg(playerStats) {
    //return Object.values(playerStats).sort(function(a,b){return a-b;})[0].toFixed(3); // my solution
    return (Object.keys(playerStats).reduce((currentSum, currentValue) => {
      return Math.min(currentSum, playerStats[currentValue]);
    }, Infinity)).toFixed(3);
}

function checkTestCase(num, playerStats){
    const result = findBestBowlingAvg(playerStats);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, {
    "Rose Mary": 14.69,
    "Joey Holden": 16.00,
    "Ged Brewer": 15.77
});

checkTestCase(2, {
  "Raymond Curtis": 19.37,
  "Alexander Menzie": 22.00,
  "Josh Harvey": 22.33,
  "Beata Lawrence": 20.28,
  "Doug Morrison": 18.50,
  "Darcy Brewer": 20.80
});