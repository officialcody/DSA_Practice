/***
 * QUESTION: List pincodes of all the users.
 * Note:
 * Input will be a list of users.
 * Each user will have a field pincode.
 * Return array of pincode of all the users of the list.
 * 
 * INPUT:
 *  const list = [
 *      { user: 'Eric', pincode: '010', },
 *      { user: "Sam", pincode: "030", },
 *      { user: "John", "pincode": "040" }
 *  ];
 * 
 * OUTPUT:
 *  010,030,040
 */

function getPincodes(list){
    return list.map((user) => user.pincode).filter(pinCode => !!pinCode);
}

function checkTestCase(num, list){
    const result = getPincodes(list);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    { user: 'Eric', pincode: '010', },
    { user: "Sam", pincode: "030", },
    { user: "John", "pincode": "040" }
  ]);
checkTestCase(2, [
    { user: 'Amy', pincode: '010', },
    { user: "Thomas", pincode: "042", },
    { user: "John", "pincode": undefined },
  ]);
checkTestCase(3, [
    { user: 'Bandon', pincode: '010', },
    { user: "Maria", pincode: "042", },
    { user: "Adrian", },
  ]);