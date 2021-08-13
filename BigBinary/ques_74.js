/***
 * QUESTION: Given a sentence as input, remove all vowels from the it.
 * 
 * Note:
 *  Return string without vowels
 * 
 * INPUT:
 *  const str = "Built by team of BigBinary";
 * 
 * OUTPUT:
 *  blt by tm f bgbnry
 */

const removeVowelsMySolution = (str) => {
    return str.toLowerCase().split('').reduce((accumulator, current) => {
      return accumulator + (current === 'a' || current === 'e' || current === 'i' || current === 'o' || current === 'u' ? '' : current);
    }, '');
};


const removeVowelsRegexProvidedSolution = (str) => {
    return str.replace(/[aeiou]/gi, '')
}

const removeVowelsProvidedSolution = (str) => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const strArr = [...str.toLowerCase()];
    const result = strArr.map((char, idx) => {
      if (vowels.has(char)) {
        return (strArr[idx] = "");
      } else return (strArr[idx] = char);
    });
    return result.join("");
};

function checkTestCase(num, str){
    const result = removeVowelsMySolution(str);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "Built by team of BigBinary");
checkTestCase(2, "Hello World");
checkTestCase(3, "The weather is good");