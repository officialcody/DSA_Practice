/***
 * QUESTION: Find the users who have vaccinated
 * Note:
 * List of users will be passed as an argument.
 * There will be a key vaccinated with boolean value.
 * Printout the list of users who have vaccinated as true.
 * 
 * INPUT:
 *  const users = [ 
 *      { name: "Sam", vaccinated: false, }, { name: "Ann", vaccinated: true, },
 *      { name: "Oliver", vaccinated: true, }, { name: "Smith", vaccinated: false, },
 *      { name: "Sam Smith", vaccinated: true, },
 *  ];
 * 
 * OUTPUT:
 *  Ann, Oliver, Sam Smith
 */

function vaccinatedUsers(users){
    const vaccinatedUsers = users.filter(user => user.vaccinated).map(user => user.name);
    return vaccinatedUsers.join(', ');
}

function checkTestCase(num, users) {
    const result = vaccinatedUsers(users);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      name: "Sam",
      vaccinated: false,
    },
    {
      name: "Ann",
      vaccinated: true,
    },
    {
      name: "Oliver",
      vaccinated: true,
    },
    {
      name: "Smith",
      vaccinated: false,
    },
    {
      name: "Sam Smith",
      vaccinated: true,
    },
  ]);

checkTestCase(2, [
    {
      name: "Sam",
      vaccinated: false,
    },
    {
      name: "Ann",
      vaccinated: true,
    },
    {
      name: "Oliver",
      vaccinated: true,
    },
    {
      name: "Smith",
      vaccinated: false,
    },
    {
      name: "Sam Smith",
    },
  ]);