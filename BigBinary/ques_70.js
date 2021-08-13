/****
 * QUESTION: For a list of participants, and a given condition, we should find a list of only 
 * those whose passes a given condition.
 * 
 * Note:
 *  Return stringified object.
 * 
 * INPUT:
 *  // Names with less than 6 letters
 *  const participants = ["Alban", "Barlow", "Walters"];
 *  const condition = name => name.length < 6;
 * 
 * OUTPUT:
 *  ["Alban"]
 * 
 * INPUT:
 *  // Names without a vowel present
 *  const participants = ["Gwynyth", "Ryn", "Cyndy", "Rahmath"];
 *  const condition = name =>  !(name.match(/[aeiou]/ig));
 * 
 * OUTPUT:
 *  ["Gwynyth","Ryn","Cyndy"]
 */

/**
 * Returns list with only those values that matches the condition.
 *
 * @function condition the condition to checked
 * @param {Array.<string>} participants the list of participant names
 * @returns {Array.<string>} matched list of participant names
 */
function removeUnMatched(participants, condition) {
    return JSON.stringify(participants.filter(participant => condition(participant)));
}

function checkTestCase(num, participants, condition){
    const result = removeUnMatched(participants, condition);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, ["Alban", "Barlow", "Walters"], name => name.length < 6);
checkTestCase(2, ["Gwynyth", "Ryn", "Cyndy", "Rahmath"], name =>  !(name.match(/[aeiou]/ig)));