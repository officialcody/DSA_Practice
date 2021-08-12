/***
 * QUESTION: Extract the given property from a given object and return Not found if propery is not found.
 * Note:
 * Return the given property from the given object
 * Return the string Not found if the property does not exist in the given object.
 * 
 * INPUT:
 *  const obj = {
 *      name: "Oliver",
 *      age: 28,
 *      address: "Main Street, New York, NY 10030",
 *  };
 *  const property = "name";
 * 
 * OUTPUT:
 *  Oliver
 */

function getProperty(object, property){
    return object[property] ? object[property] : 'Not found';
}

function checkTestCase(num, obj, property){
    const result = getProperty(obj,property);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, { name: "Oliver", age: 28, address: "Main Street, New York, NY 10030", }, "name");
checkTestCase(2, { name: "Oliver", age: 28, address: "Main Street, New York, NY 10030", }, "age");
checkTestCase(3, { name: "Oliver", age: 28, address: "Main Street, New York, NY 10030", }, 'phone');
checkTestCase(4, { name: "Oliver", age: 28, address: "Main Street, New York, NY 10030", }, 'id');
checkTestCase(4, { name: "Oliver", age: 28, address: "Main Street, New York, NY 10030", }, 'address');