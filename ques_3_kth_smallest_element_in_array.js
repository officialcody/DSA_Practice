/**
 * QUESTION: Given an array arr[] and a number K where K is smaller than size of array,
 * the task is to find the Kth smallest element in the given array. It is given that all 
 * array elements are distinct.
 * 
 *  Input:
 *      N = 6
 *      arr[] = 7 10 4 3 20 15
 *      K = 3
 *  Output : 7
 *      Explanation :
 *          3rd smallest element in the given array is 7. 
 */


function kthSmallest(array, k) {
    if(k > array.length) return 'No such element present';
    array.sort(function(a,b){return a-b;});
    return array[k-1];
}

function checkTestCase(tc, array, k){
    console.log(`Test Case ${tc}`);
    console.log(`${k}th smallest element is: ${kthSmallest(array, k)}`);
}

checkTestCase(1, [7,10,4,3,20,15], 3);
// checkTestCase(2, [45,845,12,36,12,96,81]);
// checkTestCase(3, []);
// checkTestCase(4, [12]);