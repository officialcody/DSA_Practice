/**
 * QUESTION: You are given an array prices where prices[i] is the price of a given stock on 
 * the ith day. You want to maximize your profit by choosing a single day to buy one stock 
 * and choosing a different day in the future to sell that stock. Return the maximum profit 
 * you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * INPUT:
 *  prices = [7,1,5,3,6,4]
 * 
 * OUTPUT:
 *  5
 */
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  let profit = 0;
  let index = prices.length;
  for(let i=0;i<prices.length;i++){
    if(prices[i] < min){
      min = prices[i];
      index = i;
    } else if(index < i && profit < prices[i]-min) {
      max = prices[i];
      profit= max-min<0? 0 :max-min;
    }
  }
  
  return profit;
};

function checkTestCase(tc, nums){
  console.log(`Test Case ${tc}`);
  console.log(`Output: ${maxProfit(nums)}`);
}

checkTestCase(1, [7,1,5,3,6,4]);
checkTestCase(2, [7,6,4,3,1]);
checkTestCase(3, [1,2]);