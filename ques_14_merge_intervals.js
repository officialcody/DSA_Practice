/***
 * QUESTION: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping 
 * intervals, and return an array of the non-overlapping intervals that cover all the intervals 
 * in the input.
 * 
 * Input: 
 *  intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: 
 *  [[1,6],[8,10],[15,18]]
 */
var merge = function(intervals) {
  if(intervals.length <= 1) return intervals;
  intervals.sort(function(a, b){ return a[0] - b[0]});

  let final_arr = [];
  let temp = intervals[0][1];
  let l = 1;

  final_arr.push([intervals[0][0],intervals[0][1]]);
 
  for(let i=1;i<intervals.length;i++){
      if(temp >= intervals[i][0]){
          let min = Math.min(final_arr[final_arr.length - 1][0],intervals[i][0]);
          let max = Math.max(final_arr[final_arr.length - 1][1],intervals[i][1]);
          final_arr[final_arr.length - 1][0] = min;
          final_arr[final_arr.length - 1][1] = max;
          temp = max;
          l++;
      } else {
          final_arr.push([intervals[i][0], intervals[i][1]]);
          temp = intervals[i][1];
          l=1;
      }
  }
  
  return final_arr;
};
console.log(merge([[5,5],[1,3],[3,5],[4,6],[1,1],[3,3],[5,6],[3,3],[2,4],[0,0]]));