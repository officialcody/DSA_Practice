/***
 * QUESTION: The function should return the current url and specific pathname in the format.
 * { currentUrl: <value>, pathname: <value> }
 * 
 * Note:
 *  No inputs are passed to the function.
 *  Return stringified object.
 * 
 * INPUT:
 *  // No inputs
 * 
 * OUTPUT:
 *  null
 */

function fetchURLDetails() {
    return JSON.stringify({
      currentUrl: window.location.href,
      pathname: window.location.pathname
    });
}

//NO TEST CASES...