/**
 * QUESTION: Given an array arr, the function sumExtremes() should return the sum of the first and the last element of arr.
 * 
 * Note: If arr does not contain any element, the function should return 0.
 * 
 * INPUT:
 * const arr = [1, 2, 3, 4, 5];
 * 
 * OUTPUT:
 * 	6
 */

function sumExtremes(arr){
    if (arr.length > 0)
        return arr[0] + arr[arr.length - 1]
    else
        return 0;
}

function checkTestCase(num, arr){
    const result = sumExtremes(arr);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [1,2,3,4,5]);
checkTestCase(2, [10]);
checkTestCase(3, []);
checkTestCase(4, [1,2,3,4,-4,-3,-2,-1]);