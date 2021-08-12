/***
 * QUESTION: Get all the users phone number.
 * Note:
 * Input will be a list of users.
 * Each user will have a field phone.
 * Return the phone numbers of all users.
 * 
 * INPUT:
 *  const users = [
 *      { user: "Eric", phone: "202-555-0164", },
 *      { user: "Sam", phone: "202-555-0164", },
 *      { user: "John", phone: "202-555-0143", },
 *      { user: "Amy", phone: "202-555-0143", },
 *  ];
 * 
 * OUTPUT:
 *  202-555-0164, 202-555-0164, 202-555-0143, 202-555-0143
 */

function getPhoneNumbers(users){
    return users.map(user => user.phone).join(', ');
}

function checkTestCase(num, users){
    const result = getPhoneNumbers(users);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      user: "Eric",
      phone: "202-555-0164",
    },
    {
      user: "Sam",
      phone: "202-555-0164",
    },
    {
      user: "John",
      phone: "202-555-0143",
    },
    {
      user: "Amy",
      phone: "202-555-0143",
    },
  ]);

checkTestCase(2, [
    {
      user: "John",
      phone: "202-555-0198",
    },
    {
      user: "Maria",
      phone: "202-555-0152",
    },
    {
      user: "Bandon",
      phone: "202-555-0143",
    },
    {
      user: "Rachel",
      phone: "202-555-0164",
    },
  ]);
  
checkTestCase(3, [
    {
      user: "John",
      phone: "202-555-0143",
    },
    {
      user: "Maria",
      phone: "202-555-0198",
    },
    {
      user: "Bandon",
      phone: "202-555-0164",
    },
    {
      user: "Rachel",
      phone: "202-555-0143",
    },
  ]);