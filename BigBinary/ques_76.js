/****
 * QUESTION:Given two sentences, return a list with all the unique words.
 * 
 * Note:
 * Return stringified object.
 * 
 * INPUT:
 *  const s1 = "John likes Icecream";
 *  const s2 = "Everyone likes Icecream";
 * 
 * OUTPUT:
 *  ["John","likes","Icecream","Everyone"]
 */

const uniqueWordsMySolution = (s1,s2) => {
    return JSON.stringify([...new Set(s1.split(' ').concat(s2.split(' ')))]);
}

const uniqueWordsProvidedSolution = (s1, s2) => {
    const strArr = [...s1, " ", ...s2].join("");
    const result = [...new Set(strArr.split(" "))];
    return JSON.stringify(result);
};

function checkTestCase(num, s1, s2){
    const result = uniqueWordsMySolution(s1, s2);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "John likes Icecream", "Everyone likes Icecream");
checkTestCase(2, "BigBinary says Hello", "Hello BigBinary");