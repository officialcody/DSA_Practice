/**
 * QUESTION: The function should return the type of the paramters passed.
 * 
 * INPUT:
 *  parameter = 221;
 * 
 * OUTPUT:
 *  number
 */

/**
 * Returns the type of the parameter passed
 *
 * @param {*} parameter.
 * @returns {string} result
 */
const findType = (parameter) => {
    return typeof parameter;
}

function checkTestCase(num, parameter){
    const result = findType(parameter);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 221);
checkTestCase(2, hello = () => { return true });
checkTestCase(3, 'BigBinary');
checkTestCase(4, true);
checkTestCase(5, [ { "name": "Miami", "state": "Florida" }, { "name": "Pune", "state": "Maharashtra" }, { "name": "Kochi", "state": "Kerala" } ]);