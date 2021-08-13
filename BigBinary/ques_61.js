/***
 * QUESTION: Create a function that returns the listed alphabetically sorted based on capitals of each state.
 * 
 * Note:
 * Return stringified object.
 * 
 * INPUT:
 *  const states = [
 *      { state: "Manipur", capital: "Imphal", official_Language: 'Meiteilon' },
 *      { state: "Assam", capital: "Dispur", official_Language: 'Assamese' },
 *      { state: "Meghalaya	", capital: "Shillong", official_Language: 'English' }
 *  ];
 * 
 * OUTPUT:
 *  [{"state":"Assam","capital":"Dispur","official_Language":"Assamese"},{"state":"Manipur","capital":"Imphal","official_Language":"Meiteilon"},{"state":"Meghalaya\t","capital":"Shillong","official_Language":"English"}]
 */

/**
 * Returns an alphabetically sorted array of objects
 *
 * @param {Array.<{state: string, capital: string. official_Language: string}>} states.
 * @returns {Array.<{state: string, capital: string. official_Language: string}>} results.
 */
function sortCapitals(states) {
    return JSON.stringify(states.sort((state1, state2) => {
      if(state1.capital < state2.capital) return -1;
      if(state1.capital > state2.capital) return 1;
      return 0;
    }));
}

function checkTestCase(num, states){
    const result = sortCapitals(states);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    { state: "Manipur", capital: "Imphal", official_Language: 'Meiteilon' },
    { state: "Assam", capital: "Dispur", official_Language: 'Assamese' },
    { state: "Meghalaya	", capital: "Shillong", official_Language: 'English' }
    ]);
    
checkTestCase(2, [
    { state: "Chhattisgarh", capital: "Naya Raipur", official_Language: 'Chhattisgarhi' },
    { state: "Goa", capital: "Panaji", official_Language: 'Konkani' },
    { state: "Odisha", capital: "Bhubaneswar", official_Language: 'Oriya' }
    ]);
    
checkTestCase(3, [
    { state: "Karnataka	", capital: "Bengaluru", official_Language: 'Kannada' },
    { state: "Kerala", capital: "Thiruvananthapuram", official_Language: 'Malayalam' },
    { state: "Tamil Nadu", capital: "Chennai", official_Language: 'Assamese' }
    ]);