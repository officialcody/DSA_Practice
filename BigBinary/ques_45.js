/****
 * QUESTION: Some of the users in the application are yet to do some major security updates, 
 * for such user’s IdsthirdPartyAuthAPI function will throw an error. Since we cannot update 
 * thirdPartyAuthAPI as of now, we need to handle the same in our function. Therefore in such 
 * a case, return a json object.
 * { status: error, message: <message property as passed by the `thirdPartyAuthAPI`> }
 * 
 * Note:
 * The error received from ‘thirdPartyAuthAPI’ will have a message prop, which is to be added in the return object.
 * Return stringified object. (No need to alter the return statement already given in the function)
 * 
 * INPUT:
 *  userId = 533;
 *  userName = 'Poirot';
 * 
 * OUTPUT:
 *  {"status":"error","message":"Please contact the sytem administrator"}
 */

/**
 * Returns an error object
 *
 * @param {number} userId
 * @param {number} userName
 * @function thirdPartyAuthAPI
 * @returns {string | number} result
 */
const authUser = (userId, userName, thirdPartyAuthAPI) => {
    try{
      const response = thirdPartyAuthAPI(userId, userId+userName);
      if (response.status === 'success') {
        return response.loginToken;
      }
    } catch(error) {
      return JSON.stringify({
        status: 'error',
        message: error.message,
      });
    }
}

function checkTestCase(num, userId, userName, thirdPartyAuthAPI){
    const result = authUser(userId, userName, thirdPartyAuthAPI);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}