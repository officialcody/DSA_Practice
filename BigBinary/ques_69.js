/***
 * QUESTION: From a list of words, find the word that matches the given input when any of 
 * them are reveresed.
 * 
 * Note:
 *  Return the matched word as it is.
 *  if none found, return false
 * 
 * INPUT:
 *  const list = ["read", "dear", "match", "daer"];
 *  const word = "read";
 * 
 * OUTPUT:
 *  daer
 */

function reverseAndMatch(word, list) {
    const condition = (item) => [...item.toLowerCase()].reverse().join("") === word;
    const array = list.filter((...items) => condition(...items));
    return array.length ? array[0] : false;
}

function checkTestCase(num, word, list){
    const result = reverseAndMatch(word, list);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "read", ["read", "dear", "match", "daer"]);
checkTestCase(2, "stressed", ["Knits", "Desserts", "Sports", "Star"]);
checkTestCase(3, "Time", ["Raw", "Smart", "Trams", "Spoons"]);