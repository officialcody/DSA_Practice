/***
 * QUESTION: Given an array of river names, remove duplicate ones and sort them alphabetically.
 * 
 * Note:
 *  In case of empty array return false
 * 
 * INPUT:
 *  const rivers = ['Periyar', 'Kaveri', 'Tungabhadra', 'Pampa', 'Periyar', 'Tungabhadra', 'Pampa'];
 * 
 * OUTPUT:
 *  Kaveri,Pampa,Periyar,Tungabhadra
 */

/**
 * Returns an array of unique river names
 *
 * @param {Array.<string>} rivers list of river names
 * @returns {Array.<string> | boolean} result.
 */
const removeDuplicateAndSort = (rivers) => {
    // return rivers.length ? [...new Set(rivers)].sort() : false;
    if (rivers.length !== 0) {
        const filteredList = [...new Set(rivers)];
        return filteredList.sort();
    } else {
        return false;
    }
}

function checkTestCase(num, rivers){
    const result = removeDuplicateAndSort(rivers);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, ['Periyar', 'Kaveri', 'Tungabhadra', 'Pampa', 'Periyar', 'Tungabhadra', 'Pampa']);
checkTestCase(2, ['Barak', 'Danba Qu', 'Barak', 'Gomati', 'Teesta', 'Danba Qu', 'Barak', 'Gomati']);
checkTestCase(3, ['Ghaghara', 'Ganga', 'Yamuna', 'Jhelum', 'Ghaghara', 'Ganga', 'Jhelum']);