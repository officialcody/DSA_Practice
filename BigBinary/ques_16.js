/***
 * QUESTION: Insert the given user name at the specified position in array
 * Note:
 * List of users will be given as input.
 * Insert the given user at specified index.
 * 
 * INPUT:
 *  const users = ["Ann", "Sam", "Smith", "Oliver"];
 *  const user = "Alice";
 *  const index = 2;
 * 
 * OUTPUT:
 *  Ann,Sam,Alice,Smith,Oliver
 */

function insertUser(users, user, index){
    users.splice(index, 0, user);
    return users;
}

function checkTestCase(num, users, user, index) {
    const result = insertUser(users, user, index);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, ["Ann", "Sam", "Smith", "Oliver"], 'Alice', 2);
checkTestCase(2, ["John", "Jeff", "Adrian", "Alex", "Andrew", "Lisa"], 'Eric', 4);
checkTestCase(3, ["Amy", "Bandon", "Maria", "Rachel", "Chuck", "Peter", "Thomas"], 'Eric', 8);
checkTestCase(4, ["Amy", "Bandon", "Maria"], 'Thomas', 3);