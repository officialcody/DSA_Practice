/***
 * QUESTION: List out all the debt entries of customers who owes amount greater than the input amount.
 * Note:
 * List of customers with all the debt entries will be given as input.
 * Each customer will have a field owes which records the total amount owed by the customer.
 * Find out all customers who owes amount greater than the given amount.
 * Combine all such debts and return that.
 * 
 * INPUT:
 *  const customers = [ 
 *      { name: "Alan", owes: 30000,
 *      debts: [ { amount: 10000, date: "28-June-2020", customer: "Alan", },
 *               { amount: 20000, date: "30-June-2020", customer: "Alan", },
 *               { amount: 5000, date: "5-July-2021", customer: "Alan", } ] },
 *      { name: "Eric", owes: 60000,
 *      debts: [ { amount: 30000, date: "28-June-2020", customer: "Eric", },
 *               { amount: 20000, date: "30-June-2020", customer: "Eric", },
 *               { amount: 10000, date: "5-July-2021", customer: "Eric", } ] },
 *      { name: "John", owes: 90000,
 *      debts: [ { amount: 45000, date: "28-June-2020", customer: "John", },
 *               { amount: 25000, date: "30-June-2020", customer: "John", },
 *               { amount: 20000, date: "5-July-2021", customer: "John", } ] },
 *      { name: "Juan", owes: 95000,
 *      debts: [ { amount: 35000, date: "28-June-2020", customer: "Juan", },
 *               { amount: 45000, date: "30-June-2020", customer: "Juan", },
 *               { amount: 15000, date: "5-July-2021", customer: "Juan", } ] },
 *      ];
 *  const amount = 85000;
 * 
 * OUTPUT:
 *  [ { "amount": 45000, "date": "28-June-2020", "customer": "John" }, 
 *    { "amount": 25000, "date": "30-June-2020", "customer": "John" }, 
 *    { "amount": 20000, "date": "5-July-2021", "customer": "John" }, 
 *    { "amount": 35000, "date": "28-June-2020", "customer": "Juan" }, 
 *    { "amount": 45000, "date": "30-June-2020", "customer": "Juan" }, 
 *    { "amount": 15000, "date": "5-July-2021", "customer": "Juan" } ]
 */

function getEntries(customers, amount){
    const customerList = customers.filter((customer)=> {
      return customer.owes > amount;
    });
    let entries = [];
    customerList.map(customer => entries.push(...customer.debts));
    return entries;
}

function checkTestCase(num, customers, amount) {
    const result = getEntries(customers, amount);
    console.log(`Test Case - ${num}`);
    console.log(result);
}

checkTestCase(1, [
    {
      name: "Alan",
      owes: 30000,
      debts: [
        {
          amount: 10000,
          date: "28-June-2020",
          customer: "Alan",
        },
        {
          amount: 20000,
          date: "30-June-2020",
          customer: "Alan",
        },
        {
          amount: 5000,
          date: "5-July-2021",
          customer: "Alan",
        }
      ]
    },
    {
      name: "Eric",
      owes: 60000,
      debts: [
        {
          amount: 30000,
          date: "28-June-2020",
          customer: "Eric",
        },
        {
          amount: 20000,
          date: "30-June-2020",
          customer: "Eric",
        },
        {
          amount: 10000,
          date: "5-July-2021",
          customer: "Eric",
        }
      ]
    },
    {
      name: "John",
      owes: 90000,
      debts: [
        {
          amount: 45000,
          date: "28-June-2020",
          customer: "John",
        },
        {
          amount: 25000,
          date: "30-June-2020",
          customer: "John",
        },
        {
          amount: 20000,
          date: "5-July-2021",
          customer: "John",
        }
      ]
    },
    {
      name: "Juan",
      owes: 95000,
      debts: [
        {
          amount: 35000,
          date: "28-June-2020",
          customer: "Juan",
        },
        {
          amount: 45000,
          date: "30-June-2020",
          customer: "Juan",
        },
        {
          amount: 15000,
          date: "5-July-2021",
          customer: "Juan",
        }
      ]
    }
  ], 85000);

checkTestCase(2, [
    {
      name: "Alan",
      owes: 30000,
      debts: [
        {
          amount: 10000,
          date: "28-June-2020",
          customer: "Alan",
        },
        {
          amount: 20000,
          date: "30-June-2020",
          customer: "Alan",
        },
        {
          amount: 5000,
          date: "5-July-2021",
          customer: "Alan",
        }
      ]
    },
    {
      name: "Eric",
      owes: 60000,
      debts: [
        {
          amount: 30000,
          date: "28-June-2020",
          customer: "Eric",
        },
        {
          amount: 20000,
          date: "30-June-2020",
          customer: "Eric",
        },
        {
          amount: 10000,
          date: "5-July-2021",
          customer: "Eric",
        }
      ]
    },
    {
      name: "John",
      owes: 90000,
      debts: [
        {
          amount: 45000,
          date: "28-June-2020",
          customer: "John",
        },
        {
          amount: 25000,
          date: "30-June-2020",
          customer: "John",
        },
        {
          amount: 20000,
          date: "5-July-2021",
          customer: "John",
        }
      ]
    },
    {
      name: "Juan",
      owes: 95000,
      debts: [
        {
          amount: 35000,
          date: "28-June-2020",
          customer: "Juan",
        },
        {
          amount: 45000,
          date: "30-June-2020",
          customer: "Juan",
        },
        {
          amount: 15000,
          date: "5-July-2021",
          customer: "Juan",
        }
      ]
    }
  ], 50000);

checkTestCase(3, [
    {
      name: "Alan",
      owes: 30000,
      debts: [
        {
          amount: 10000,
          date: "28-June-2020",
          customer: "Alan",
        },
        {
          amount: 20000,
          date: "30-June-2020",
          customer: "Alan",
        },
        {
          amount: 5000,
          date: "5-July-2021",
          customer: "Alan",
        }
      ]
    },
    {
      name: "Eric",
      owes: 60000,
      debts: [
        {
          amount: 30000,
          date: "28-June-2020",
          customer: "Eric",
        },
        {
          amount: 20000,
          date: "30-June-2020",
          customer: "Eric",
        },
        {
          amount: 10000,
          date: "5-July-2021",
          customer: "Eric",
        }
      ]
    },
    {
      name: "John",
      owes: 90000,
      debts: [
        {
          amount: 45000,
          date: "28-June-2020",
          customer: "John",
        },
        {
          amount: 25000,
          date: "30-June-2020",
          customer: "John",
        },
        {
          amount: 20000,
          date: "5-July-2021",
          customer: "John",
        }
      ]
    },
    {
      name: "Juan",
      owes: 95000,
      debts: [
        {
          amount: 35000,
          date: "28-June-2020",
          customer: "Juan",
        },
        {
          amount: 45000,
          date: "30-June-2020",
          customer: "Juan",
        },
        {
          amount: 15000,
          date: "5-July-2021",
          customer: "Juan",
        }
      ]
    }
  ], 35000);