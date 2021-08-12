/***
 * QUESTION: Update property in the given object
 * Note:
 * Property to be updated will be given as an input.
 * Add the property if it doesn’t already exist.
 * Return stringified object.
 * Make sure to use two spaces in the output JSON string for readability purposes.
 * 
 * INPUT:
 *  const obj = {
 *      id: 1,
 *      userName: "oliver_smith",
 *      name: "Oliver Smith",
 *  };
 *  const property = "age";
 *  const value = 32;
 * 
 * OUTPUT:
 *  { "id": 1, "userName": "oliver_smith", "name": "Oliver Smith", "age": 32 }
 */

function updateObject(obj, property, value){
    obj[property] = value;
    return JSON.stringify(obj,null,2);
}

function checkTestCase(num, obj, property, value){
    const result = updateObject(obj, property, value);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, { id: 1, userName: "oliver_smith", name: "Oliver Smith", }, "age", 32);
checkTestCase(2, { id: 1, userName: "oliver_smith", name: "Oliver Smith", }, "userName", 'sam_smith');
checkTestCase(3, { id: 1, userName: "sam_Smith", name: "Oliver Smith", }, "name", 'Sam Smith');
checkTestCase(4, { id: 1, userName: "anna_smith", name: "Anna Smith", }, 'address', "432 Street, Downtown");