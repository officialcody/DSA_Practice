/***
 * QUESTION: Check whether all the users in the given list have a credit card.
 * Note:
 * Check whether all users in the given list have a credit card.
 * The user object will contain name of the user and a key creditCard.
 * Return trueif all the users have creditCard field as true, false otherwise.
 * 
 * INPUT:
 *  const users = [
 *      { name: "Amy", creditCard: true, },
 *      { name: "Bandon", creditCard: true, },
 *      { name: "Maria", creditCard: true, },
 *      { name: "Rachel", creditCard: true, },
 *      { name: "Chuck", creditCard: true, },
 *      { name: "Peter", creditCard: true, },
 *      { name: "Thomas", creditCard: true, },
 *  ];
 * 
 * OUTPUT:
 *  true
 */

function doesAllUsersHaveCreditCard(users){
    return users.every(user => user.creditCard);
}

function checkTestCase(num,users){
    const result = doesAllUsersHaveCreditCard(users);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      name: "Amy",
      creditCard: true,
    },
    {
      name: "Bandon",
      creditCard: true,
    },
    {
      name: "Maria",
      creditCard: true,
    },
    {
      name: "Rachel",
      creditCard: true,
    },
    {
      name: "Chuck",
      creditCard: true,
    },
    {
      name: "Peter",
      creditCard: true,
    },
    {
      name: "Thomas",
      creditCard: true,
    },
  ]);
checkTestCase(2, [
    {
      name: "Amy",
      creditCard: true,
    },
    {
      name: "Bandon",
      creditCard: true,
    },
    {
      name: "Maria",
      creditCard: true,
    },
    {
      name: "Rachel",
      creditCard: false,
    },
    {
      name: "Chuck",
      creditCard: true,
    },
    {
      name: "Peter",
      creditCard: false,
    },
    {
      name: "Thomas",
      creditCard: true,
    },
  ]);
checkTestCase(3, [
    {
      name: "Amy",
      creditCard: false,
    },
    {
      name: "Bandon",
      creditCard: false,
    },
    {
      name: "Maria",
      creditCard: false,
    },
    {
      name: "Rachel",
      creditCard: false,
    },
    {
      name: "Chuck",
      creditCard: false,
    },
    {
      name: "Peter",
      creditCard: false,
    },
    {
      name: "Thomas",
      creditCard: false,
    },
  ]);