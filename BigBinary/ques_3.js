/***
 * QUESTION: Given an object person with keys firstName and lastName, the function getFullName should return a string which combines firstName and lastName separated by a space.
 * Note:
 * If the firstName doesn’t exist, return just the lastName as the full name
 * If the lastName doesn’t exist, return just the firstName as the full name
 * If both firstName and lastName don’t exist, return "" as the full name.
 * 
 * INPUT:
 * const person = {
 *  firstName: 'Sherlock',
 *  lastName: 'Holmes'
 * };
 * 
 * OUTPUT:
 *  Sherlock Holmes
 */

 function getFullName(person){
    const { firstName, lastName } = person;
    let fullName = ""
    if(firstName)
        fullName += firstName;
    if(firstName && lastName)
        fullName += " ";
    if(lastName)
        fullName += lastName;
    return fullName;
}

function checkTestCase(num, obj){
    const result = getFullName(obj);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, { firstName: 'Sherlock', lastName: 'Holmes' });
checkTestCase(2, { firstName: 'Sherlock' });
checkTestCase(3, { lastName: 'Holmes' });
checkTestCase(4, { middleName: 'Scott' });