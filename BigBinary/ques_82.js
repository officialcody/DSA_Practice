/****
 * QUESTION: Given a full name, shuffle the same.
 * 
 * Note:
 *  Complete the functions “shuffleNames” and “shuffle”
 *  Do not rename any of the functions given below.
 *  Function “shuffleNames” should shuffle Person object’s name property.
 * 
 * INPUT:
 *  const str = "Oliver Smith";	
 * 
 * OUTPUT:
 *  Smith Oliver
 */

class Person {
    constructor(name) {
      this.name = name;
    }
}
  
function shuffleNames() {
    return this.name.split(' ').reverse().join(' ');
}
  
function shuffle(str) {
    const person = new Person(str);
    const s = shuffleNames.bind(person);
    return s();
}

function checkTestCase(num, str){
    const result = shuffle(str);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "Oliver Smith");
checkTestCase(2, "Stephan Carlos");
checkTestCase(3, "Renu Sen");
checkTestCase(4, "Chinua Achebe");