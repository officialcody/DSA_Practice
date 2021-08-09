/********************************************************************************
Question - 1: Given an array (or string), the task is to reverse the array/string.

    Input  : arr[] = {1, 2, 3}
    Output : arr[] = {3, 2, 1}

    Input :  arr[] = {4, 5, 1, 2}
    Output : arr[] = {2, 1, 5, 4}

*******************************************************************************/

function reverseArray(array) {
    return array.length <= 1 ? array : array.reverse();
}


/************* REVERSE AN ARRAY USING SWAPPING **************
// STEP - 1: Handle Edge case i.e. for less than equal to 1 element in the array
// STEP - 2: Initialize start and end pointers to setup the range of the loop (Take start = 0 and end = array.length - 1)
// STEP - 3: Loop till start is less than end.          
// STEP - 4: Set temp to array[start] and swap the value of array[start] and array[end] using temp.
// STEP - 5: Increment the value of start and decrement the value of end
************************************************************/
function reverseArrayUsingSwapping(array){
    if(array.length <= 1) {
        return array;
    }

    let start = 0;
    let end = array.length - 1;

    while(start < end) {
        let temp = array[start]
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }

    return array;
}

console.log('Test case - 1');
console.log('Simple Reverse Method ' + reverseArray([1, 2, 3]));
console.log('Reverse Using Swapping ' + reverseArrayUsingSwapping([1, 2, 3]));

console.log('Test Case - 2');
console.log('Simple Reverse Method ' + reverseArray([4,5,1,2]));
console.log('Reverse Using Swapping ' + reverseArrayUsingSwapping([4,5,1,2]));

console.log('Test case - 3');
console.log('Simple Reverse Method ' + reverseArray([]));
console.log('Reverse Using Swapping ' + reverseArrayUsingSwapping([]));

console.log('Test Case - 4');
console.log('Simple Reverse Method ' + reverseArray([145]));
console.log('Reverse Using Swapping ' + reverseArrayUsingSwapping([145]));