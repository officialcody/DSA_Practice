/***
 * QUESTION: List the name of all users who have MacBook
 * Note:
 * List of users will be given as input.
 * There will be a key device which contains the device model.
 * Filter out all users who have MacBook in their device type name.
 * 
 * INPUT:
 *  const users = [ { user: "Amy", device: "MacBook", }, { user: "Jeff", device: "Asus Zenbook 14", },
 *      { user: "Alex", device: "MacBook", }, { user: "Rachel", device: "iMac", },
 *      { user: "John", device: "MacBook", } ];
 * 
 * OUTPUT:
 *  Amy,Alex,John
 */

function macbookUsers(users){
    return users.filter(user => { 
        return user.device.toLowerCase().includes('macbook');
    }).map(user=>user.user);
}

function checkTestCase(num, users) {
    const result = macbookUsers(users);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      user: "Amy",
      device: "MacBook",
    },
    {
      user: "Jeff",
      device: "Asus Zenbook 14",
    },
    {
      user: "Alex",
      device: "MacBook",
    },
    {
      user: "Rachel",
      device: "iMac",
    },
    {
      user: "John",
      device: "MacBook",
    }
  ]);

checkTestCase(2, [
    {
      user: "Chuck",
      device: "Asus Zenbook 14",
    },
    {
      user: "Bandon",
      device: "MacBook",
    },
      {
      user: "Maria",
      device: "iMac",
    },
    {
      user: "Thomas",
      device: "MacBook",
    },
    {
      user: "Stuart",
      device: "MacBook",
    }
  ]);
  
checkTestCase(3, [
    {
      user: "Lindsay",
      device: "MacBook Pro 13",
    },
    {
      user: "Peter",
      device: "MacBook",
    },
      {
      user: "Victoria",
      device: "MacBook Pro 15",
    },
    {
      user: "Erica",
      device: "Dell",
    },
    {
      user: "Clark",
      device: "macbook pro 13",
    }
  ]);