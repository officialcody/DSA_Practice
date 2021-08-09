/**
 * QUESTION: Write a function to return minimum and maximum in an array. 
 *           Your program should make the minimum number of comparisons. 
 * 
 *  INPUT: [1000, 11, 445, 1, 330, 3000]
 *  OUTPUT: Maximum: 3000
 *          Minimum: 1
 */

function maximumAndMinimum(array){
    if(array.legnth) {
        return { maximum: 'No element', minimum: 'No element'};
    } else if(array.length === 1){
        return { maximum: array[0], minimum: array[0]};
    } else {
        array.sort(function(a,b){ return a-b;});
        return { maximum: array[array.length - 1], minimum: array[0] };
    }
}

function checkTestCase(tc, array){
    console.log(`Test Case ${tc}`);
    const { maximum, minimum } = maximumAndMinimum(array);
    console.log(`Maximum: ${maximum}`);
    console.log(`Minimum: ${minimum}`);
}

checkTestCase(1, [1000,11,445,1,330,3000]);
checkTestCase(2, [45,845,12,36,12,96,81]);
checkTestCase(3, []);
checkTestCase(4, [12]);