/***
 * Question: Sort user list by number of clicks;
 * Note:
 * Input will be a list of users.
 * Each user will have a field clicks which will be a number.
 * Return list sorted by field clicks in ascending order
 * 
 * INPUT:
 *  const users = [ 
 *      { user: "Eric", clicks: 430, }, 
 *      { user: "Sam", clicks: 220, }, 
 *      { user: "John", clicks: 830, }, 
 *      { user: "Amy", clicks: 778, },
 *  ];
 * 
 * OUTPUT:
 *  [ { "user": "Sam", "clicks": 220 }, 
 *  { "user": "Eric", "clicks": 430 }, 
 *  { "user": "Amy", "clicks": 778 }, 
 *  { "user": "John", "clicks": 830 } ]
 */

function sortUsersMySolution(users){
    return users.sort((userA, userB) => {
      return userA.clicks - userB.clicks;
    });
}

function sortUsersProvidedSolution(users){
    return users.sort((userA, userB) => {
      if (userA.clicks < userB.clicks) {
        return -1;
      }
      if (userA.clicks > userB.clicks) {
        return 1;
      }
      return 0;
    });
}

function checkTestCase(num, users){
    const result = sortUsersMySolution(users);
    console.log(`Test Case - ${num}`);
    result.forEach(user => {
        console.log(`${Object.keys(user)} ${Object.values(user)}`);
    })
}

checkTestCase(1,  [
    {
      user: "Eric",
      clicks: 430,
    },
    {
      user: "Sam",
      clicks: 220,
    },
    {
      user: "John",
      clicks: 830,
    },
    {
      user: "Amy",
      clicks: 778,
    },
  ]);
checkTestCase(2, [
    {
      user: "John",
      clicks: 23,
    },
    {
      user: "Maria",
      clicks: 20,
    },
    {
      user: "Bandon",
      clicks: 84,
    },
    {
      user: "Rachel",
      clicks: 78,
    },
  ]);
checkTestCase(3, [
    {
      user: "John",
      clicks: 123,
    },
    {
      user: "Maria",
      clicks: 240,
    },
    {
      user: "Bandon",
      clicks: 857,
    },
    {
      user: "Rachel",
      clicks: 100,
    },
  ]);