/***
 * QUESTION: Check whether there are any unpaid items in the cart.
 * Note:
 * Input will be a cart object with list of items.
 * Each item will have a field paymentStatus.
 * Return true if atleast one item in the cart have paymentStatus as false.
 * 
 * INPUT:
 *  const cart = [
 *      { item: "Snacks", paymentStatus: false, },
 *      { item: "Pen", paymentStatus: false, },
 *      { item: "Books", paymentStatus: true, },
 *      { item: "Notepad", paymentStatus: true, },
 *  ];
 * 
 * OUTPUT:
 *  true
 */

function checkCart(cart){
    return cart.some((item) => !item.paymentStatus);
}

function checkTestCase(num, cart){
    const result = checkCart(cart);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      item: "Snacks",
      paymentStatus: false,
    },
    {
      item: "Pen",
      paymentStatus: false,
    },
    {
      item: "Books",
      paymentStatus: true,
    },
    {
      item: "Notepad",
      paymentStatus: true,
    },
  ]);
  
checkTestCase(2, [
    {
      item: "Rice",
      paymentStatus: false,
    },
    {
      item: "Pasta",
      paymentStatus: true,
    },
    {
      item: "Flour",
      paymentStatus: true,
    },
    {
      item: "Cheese",
      paymentStatus: false,
    },
  ]);

checkTestCase(3, [
    {
      item: "Juice",
      paymentStatus: true,
    },
    {
      item: "Coffe Beans",
      paymentStatus: true,
    },
    {
      item: "Sugar",
      paymentStatus: true,
    },
    {
      item: "Milk",
      paymentStatus: true,
    },
  ]);