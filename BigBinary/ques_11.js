/***
 * QUESTION: Check whether a given property does exist in the object.
 * Note:
 * Return true if the property exist in the object.
 * Return false otherwise.
 * 
 * INPUT:
 *  const obj = {
 *      id: 1,
 *      userName: "oliver_smith",
 *      name: "Oliver Smith",
 *  };
 *  const property = "age";
 * 
 * OUTPUT:
 *  false
 */

function doesPropertyExist(obj, property){
    return Object.keys(obj).indexOf(property) !== -1;
}

function checkTestCase(num, object, property) {
    const result = doesPropertyExist(object, property);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, { id: 1, userName: "oliver_smith", name: "Oliver Smith", }, "age");
checkTestCase(2, { id: 1, userName: "oliver_smith", name: "Oliver Smith", }, "userName");
checkTestCase(3, { id: 1, userName: "sam_Smith", name: "Oliver Smith", }, "address");
checkTestCase(4, { id: 1, userName: "anna_smith", name: "Anna Smith", }, 'name');