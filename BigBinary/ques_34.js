/****
 * QUESTION: Given a credit card numbers as input, return it with only the last 4 digits displayed and the rest masked with *
 * Note:
 * The length of the returned value should be same as the cardNumber digits.
 * 
 * INPUT:
 *  const cardNumber = '5555 5555 5555 4444';
 * 
 * OUTPUT:
 *  ************4444
 */

/**
 * Returns masked card number
 *
 * @param {string} cardNumber.
 * @returns {string} result
 */
const maskCreditCardNumber = (cardNumber) => {
    // return '************' + cardNumber.substr(-4);
    const trimmedNumber = cardNumber.replaceAll(' ','');
    const lastDigits = trimmedNumber.slice(-4);
    return lastDigits.padStart(trimmedNumber.length, '*');
}

function checkTestCase(num, cardNumber){
    const result = maskCreditCardNumber(cardNumber);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, '5555 5555 5555 4444');
checkTestCase(2, '5105 1051 0510 5100');
checkTestCase(3, '4111 1111 1111 1111');
checkTestCase(4, '4012 8888 8888 1881');