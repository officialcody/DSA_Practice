/***
 * QUESTION: The function, should return the solution to the jumbled words passed to it.
 * 
 * Note:
 * The ‘sampleDictionary’ might or might not contain the correct word.
 * If the solution is not present in ‘sampleDictionary’, then return false
 * 
 * INPUT:
 *  const word = 'AEBUMRCNSSL';
 *  const sampleDictionary = ['Personality', 'Quadrillion', 'Abandonedly', 'Unscrambles', 'Abashedness'];
 * 
 * OUTPUT:
 *  Unscrambles
 */

/**
 * Returns solved word
 *
 * @param {string} word jumbled word.
 * @param {Array.<string>} sampleDictionary words to be matched with.
 * @returns {(string | boolean)} result
 */
const solveJumbledWords = (word, sampleDictionary) => {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    let finalWord = false;
    for(let i=0;i<sampleDictionary.length;i++){
      if(sampleDictionary[i].toLowerCase().split('').sort().join('') === sortedWord){
        finalWord = sampleDictionary[i];
        break;
      }
    }
    return finalWord;
}

function checkTestCase(num, word, sampleDictionary){
    const result = solveJumbledWords(word, sampleDictionary);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'AEBUMRCNSSL', ['Personality', 'Quadrillion', 'Abandonedly', 'Unscrambles', 'Abashedness']);
checkTestCase(2, 'AEHPSSR', ['Surbase', 'Uncases', 'Phrases', 'Rubasse', 'Sucrase']);
checkTestCase(3, 'ABELLLSY', ['Syllabus', 'Intellectualism', 'Pacifism', 'Syllable', 'Sidewall']);
checkTestCase(4, 'VSRLEO', ['Pollen', 'Pulley', 'Follow', 'Solve']);