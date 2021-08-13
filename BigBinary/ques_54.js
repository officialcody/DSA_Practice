/***
 * QUESTION: The function should return the vowels found in the sentence.
 * 
 * NOTE:
 *  Make sure to return only one instance of any vowel found in the paragrah string given as 
 *  input.
 *  Returned vowels should be alphabetically sort the vowels and in lower case.
 *  If no vowels are present return an empty array.
 *  Return stringified object.
 * 
 * INPUT:
 *  const sentence = 'Sly lynx fly by my crwth.'
 * 
 * OUTPUT:
 *  []
 */

/**
 * Returns a stringified array of vowels found.
 *
 * @param {string} sentence
 * @return {string} result
 */
function findVowelsMySolution(sentence) {
    let vowels = [];
    sentence.toLowerCase().split('').forEach(character => {
      if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        vowels.push(character);
      }
    });
    return JSON.stringify([...new Set(vowels)].sort());
}

function findVowelsProvidedSolution(sentence) {
    const vowelFreq = { a:0, e:0, i:0, o:0, u:0};
    
    [...sentence].forEach(letter => {
        vowelFreq[letter] += 1;
    });
    
    return JSON.stringify(Object.keys(vowelFreq).filter(vowel => vowelFreq[vowel] > 0));
}

function checkTestCase(num, sentence){
    const result = findVowelsMySolution(sentence);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'Sly lynx fly by my crwth.');
checkTestCase(2, 'Good Morning, have some tea!');
checkTestCase(3, `We can use regular expressions, which are basically patterns to match character combinations in strings`);