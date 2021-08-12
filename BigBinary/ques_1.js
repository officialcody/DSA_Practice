/**
 * QUESTION: Given an object obj and a key k, the function getProperty should return the value of property k from object obj.
 * 
 * INPUT:
 *  const obj = {
 *   name: "Oliver",
 *   hobby: "Writing"
 *   };
 *  const k = "name";
 * 
 * OUTPUT:
 *  Oliver
 */

function getProperty(obj, k){
    return obj[k];
}

function checkTestCase(num, obj, k){
    const result = getProperty(obj, k);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, { name: 'Oliver', hobby: 'Writing' }, "name");
checkTestCase(2, { }, "name");
checkTestCase(3, { name: 'Oliver', hobby: 'Writing'}, "profession");
checkTestCase(4, { name: 'Oliver', hobby: 'Writing'}, "hobby");