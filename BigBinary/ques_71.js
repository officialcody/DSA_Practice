/***
 * QUESTION: Given a sentence, find the longest word in the it.
 * 
 * Note:
 *  If one or more words have the same length, return the first occuring word of the same length.
 * 
 * INPUT:
 *  const str = "Built by folks at BigBinary";
 * 
 * OUTPUT:
 *  BigBinary
 */

const longestWord = (str) => {
    return str.split(' ').reduce((accumulator, current) => {
        return accumulator.length >= current.length ? accumulator : current;
    }, '');
};

function checkTestCase(num, str){
    const result = longestWord(str);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "Built by folks at BigBinary");
checkTestCase(2, "Hello World");
checkTestCase(3, "I love icecream");
checkTestCase(4, "Evenly Sized");