/***
 * QUESTION: Given a sentence determine whether it is a pangram in the lowercase English 
 * alphabet.
 * 
 * A pangram is a string that contains every letter of the alphabet at least once.
 * 
 * Note:
 *  Input string can be upper or lower case.
 *  Consider pangram in the lowercase English alphabet only.
 * 
 * INPUT:
 *  const str = "The quick brown fox jumps over a lazy dog";
 * 
 * OUTPUT:
 *  true
 */
const isPangram = (str) => {
    const arr = [..."abcdefghijklmnopqrstuvwxyz"];
    const hash = new Map();
    arr.forEach((e) => hash.set(e, 0));
    const strArr = [...str.toLowerCase()];
    strArr.forEach((e) => {
      if (hash.has(e)) hash.delete(e);
    });
    if (hash.size === 0) return true;
    return false;
};

function checkTestCase(num, str){
    const result = isPangram(str);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "The quick brown fox jumps over a lazy dog");
checkTestCase(2, "We promptly judged antique ivory buckles for the next prize");
checkTestCase(3, "Welcome to the gym");
checkTestCase(4, "Brown jars prevented the mixture from freezing too quickly");
checkTestCase(5, "When zombies arrive, quickly fax Judge Pat");
checkTestCase(6, "The five boxing wizards jump quickly");