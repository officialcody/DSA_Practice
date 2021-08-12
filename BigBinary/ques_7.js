/***
 * QUESTION: Convert the given elapsed number of seconds to a format of hours:mniutes:seconds
 * Note:
 * Return the given number of elapsed seconds in to hours:minutes:seconds
 * For eg: given 3670 as input and the output should be 1:1:10. 3600 seonds is equal to 1 hour, then again 70 seconds has past which is 1 minute and 10 second.
 * 
 * INPUT:
 * const elapsedSeconds = 3670;
 * 
 * OUTPUT:
 * 	1:1:10
 */

function formatElapsedSeconds(elapsedSeconds){
    const hours = parseInt(elapsedSeconds / 3600);
    const minutes = parseInt((elapsedSeconds / 60) % 60);
    const seconds = parseInt(elapsedSeconds % 60);
    return `${ hours }:${ minutes }:${ seconds }`;
}

function checkTestCase(num,number){
    const result = formatElapsedSeconds(number);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 3670);
checkTestCase(2, 670);
checkTestCase(3, 545);
checkTestCase(4, 50);
checkTestCase(5, 9834);