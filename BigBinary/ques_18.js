/***
 * QUESTION: Findout the index of the element in the given array.
 * Note:
 * Find out the index of the given element in the array.
 * Return index if the element is present.
 * Return text Not found if the element is not present.
 * 
 * INPUT:
 *  const list = ["MacBook", "Asus Zenbook 14", "MacBook Pro 13", "iMac", "MacBook Pro"];
 *  const value = "iMac";
 * 
 * OUTPUT:
 *  3
 */

function getIndex(list, value){
    if(!list.includes(value)) {
      return 'Not found';
    }
    return list.indexOf(value);
}

function checkTestCase(num, list, value) {
    const result = getIndex(list, value);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, ["MacBook", "Asus Zenbook 14", "MacBook Pro 13", "iMac", "MacBook Pro"], "iMac");
checkTestCase(2, ["Star", "Blackhole", "Planet", "Asteroid", "Constellation"], "Wormhole");
checkTestCase(3, ["ISRO", "NASA", "JAXA", "Roscosmos", "ESA"], "ISRO");
checkTestCase(4, ["Soyuz", "SpaceShuttle", "Vostok", "Gemini", "Apollo"], "Voskhod");