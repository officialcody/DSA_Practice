/**
 * QUESTION: Find the sum of amount spent by the given user from the given expense details.
 * 
 * INPUT:
 *  const expenses = [
 *   {
 *     spentOn: "Movie",
 *     amount: 500
 *   },
 *   {
 *     spentOn: "Tram",
 *     amount: 200
 *   },
 *   {
 *     spentOn: "Lunch",
 *     amount: 290
 *   },
 *   {
 *     spentOn: "Groceries",
 *     amount: 3290
 *   },
 *   {
 *     spentOn: "Fashion",
 *     amount: 8290
 *   }
 * ];
 * 
 * OUTPUT:
 *  12570
 */

const totalExpenses = (expenses) => {
  return expenses.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);
}

function checkTestCase(num, expenses){
  const result = totalExpenses(expenses);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [
  {
    spentOn: "Movie",
    amount: 500
  },
  {
    spentOn: "Tram",
    amount: 200
  },
  {
    spentOn: "Lunch",
    amount: 290
  },
  {
    spentOn: "Groceries",
    amount: 3290
  },
  {
    spentOn: "Fashion",
    amount: 8290
  }
]);
checkTestCase(2, [
  {
    spentOn: "Train",
    amount: 300
  },
  {
    spentOn: "Vegetables",
    amount: 800
  },
  {
    spentOn: "Dairy",
    amount: 300
  },
  {
    spentOn: "Stationary",
    amount: 1200
  },
  {
    spentOn: "Fuel",
    amount: 3200
  }
]);