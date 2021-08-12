/***
 * QUESTION: Find the sum of amount spent by the given user.
 * Note:
 * List of expenses of the user will be given as input.
 * Iterate and find the sum of the field amount from each expense object in the list.
 * 
 * 
 * INPUT:
 *  const expenses = [
 *      { spentOn: "Movie", amount: 500, },
 *      { spentOn: "Tram", amount: 200, },
 *      { spentOn: "Lunch", amount: 290, },
 *      { spentOn: "Groceries", amount: 3290, },
 *      { spentOn: "Fashion", amount: 8290, },
 *  ];
 * 
 * OUTPUT:
 *  12570
 */

function totalExpenses(expenses){
    return expenses.reduce((totalAmount, currentExp)=> {
      return totalAmount + currentExp.amount;
    }, 0);
}

function checkTestCase(num, expenses) {
    const result = totalExpenses(expenses);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [ { spentOn: "Movie", amount: 500, }, { spentOn: "Tram", amount: 200, },
    { spentOn: "Lunch", amount: 290, }, { spentOn: "Groceries", amount: 3290, }, 
    { spentOn: "Fashion", amount: 8290, }, ]);
    
checkTestCase(2, [ { spentOn: "Train", amount: 300, }, { spentOn: "Vegetables", amount: 800, },
    { spentOn: "Dairy", amount: 300, }, { spentOn: "Stationary", amount: 1200, },
    { spentOn: "Fuel", amount: 3200, }, ]);
  