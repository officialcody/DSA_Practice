/***
 * QUESTION: Given two words, determine if one is an anagram of another.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as spar, formed from rasp.
 * 
 * INPUT:
 *  const s1 = 'Paris';
 *  const s2 = 'Pairs';
 * 
 * OUTPUT:
 *  true
 */
const isAnagram = (s1,s2) => {
    return s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
};

function checkTestCase(num, s1, s2){
    const result = isAnagram(s1,s2);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'Paris','Pairs');
checkTestCase(2, 'racecar', 'carrace');
checkTestCase(3, 'Stressed', 'Desserts');
checkTestCase(4, 'Hello', 'Ollah');