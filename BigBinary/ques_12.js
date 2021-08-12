/***
 * QUESTION: Add the given element to array only if it doesn’t already exist in the array.
 * Note:
 * Add the given element to the array.
 * Add the element only if it doesn’t exist in the array.
 * 
 * INPUT:
 *  const list = ["Sam", "Ann", "Oliver"];
 *  const value = "Smith";
 * 
 * OUTPUT:
 *  Sam, Ann, Oliver, Smith
 */

function addToList(list, value){
    if(!list.includes(value)){
      list.push(value)
    }
    return list;
}

function checkTestCase(num, list, value) {
    const result = addToList(list, value);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, ["Sam", "Ann", "Oliver"], 'Smith');
checkTestCase(2, ["Sam", "Ann", "Smith"], 'Smith');
checkTestCase(3, ["Ann", "Oliver"], 'Sam');
checkTestCase(4, ["Ann", "Sam", "Oliver"], 'Oliver');