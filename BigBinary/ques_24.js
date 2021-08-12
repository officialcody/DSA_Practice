/***
 * QUESTION: Convert the given array of array of numbers to array of sum.
 * Note:
 * Input will be an array, which have another array at each index.
 * The inner array will contain numbers.
 * Calculate the sum of numbers in each array and return an array with the sum at the same index.
 * 
 * INPUT:
 *  const list = [[3, 4], [10, 20], [12, 13], [14, 17], [19, 20]];
 * 
 * OUTPUT:
 *  7,30,25,31,39
 */

function sum(list){
    return list.map((element) => {
      return element.reduce((accumulator, currentElement)=> {
        return accumulator + currentElement;
      }, 0);
    });
}

function checkTestCase(num, list){
    const result = sum(list);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [[3, 4], [10, 20], [12, 13], [14, 17], [19, 20]]);
checkTestCase(2, [[9, 2, 12], [12, 233, 98, 87], [65, 43, 12, 13], [87, 114, 179, 786], [234, 34, 19, 20]]);
checkTestCase(3, [[19, 12], [34, 545, 65, 654], [43, 98, 90]]);
checkTestCase(4, [[19, 12], [34, 545, 65, 654], [43, 98, 90], []]);
checkTestCase(5, [[3, 4], [], [12, 13], [14, 17], [19, 20]]);
checkTestCase(6, [[23, 4], [10, 20], [12, 13], [14, 17], [19, 20]]);