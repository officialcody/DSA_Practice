/***
 * QUESTION: Access authCode returned by the dummy decode function, inside the authentication 
 * function Auth inside the MainApp, and return the same.
 * 
 * Note:
 * Try to acheive it with a one line change.
 * 
 * INPUT:
 *  const code = '4X2&rs%#7D'; 
 *  const decode = (value) => { return 'decodedValue'; }
 * 
 * OUTPUT:
 *  decodedValue
 */

/**
 * Returns the string
 *
 * @param {string} code
 * @function decode the dummy fucntion
 * @returns {string} result
 */
const mainApp = (code, decode) => {
    const authCode = decode(code);
    const Auth = () => {
      return authCode;
    }
    return Auth();
}

function checkTestCase(num, code, decode){
    const result = mainApp(code,decode);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, '4X2&rs%#7D', (value) => { return 'decodedValue'; });
checkTestCase(2, '5f2!*r43%2^&', () => { return 'decodedValue'; });