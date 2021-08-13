/*****
 * QUESTION: Given two sentences, determine if one is an anagram of another.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, 
 * such as spar, formed from rasp.
 * 
 * INPUT:
 *  const s1 = 'The earthquakes';
 *  const s2 = 'The queer shakes';
 * 
 * OUTPUT:
 *  false
 */
const isAnagram = (s1,s2) => {
    const string1 = s1.toLowerCase().split('').sort().join('').trim();
    const string2 = s2.toLowerCase().split('').sort().join('').trim();
    return string1 === string2;
};

function checkTestCase(num, s1, s2){
    const result = isAnagram(s1,s2);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'The earthquakes', 'The queer shakes');
checkTestCase(2, 'Older and Wiser', 'I learned Words');
checkTestCase(3, 'Coins kept', 'In Pockets');
checkTestCase(4, 'William Shakespeare', 'I am a weakish speller');