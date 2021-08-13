/**
 * QUESTION: Give a lucky draw, chose the winner whose ticket number is divisble by 113. 
 * If there are more than 1, then try 251, 376 and 401 in that order.
 * 
 * Note:
 *  Assuming there will always be one winner ticket ID that matches the above given logic.
 * 
 * INPUT:
 *  let respondentDetails = [
 *      { html: 30, css: 11, javascript: 23, react: 21, },
 *      { html: 30, css: 27, javascript: 15, ruby: 25, },
 *      { html: 30, css: 15, javascript: 19, ruby: 25, sql: 27, tailwindCSS: 15 },
 *  ];
 * 
 * OUTPUT:
 *  [{"html":30,"css":11,"javascript":23,"react":21,"totalCount":85},{"html":30,"css":27,"javascript":15,"ruby":25,"totalCount":97},{"html":30,"css":15,"javascript":19,"ruby":25,"sql":27,"tailwindCSS":15,"totalCount":131}]
 */

/**
 * Returns the winning ticket Id.
 *
 * @param {Array.<{id: number, name: string, phoneNumber: number}>} ticketLot.
 * @returns {(number)} result.
 */

function chooseWinner(ticketLot) {
    const divisorFrequency = [113,251,376,401];
    for(let divisor of divisorFrequency) {
      let winner = ticketLot.filter(ticket => ticket.id % divisor === 0);
        if(winner && winner.length === 1){
            return winner[0].id;
        }
    }
}

function checkTestCase(num, ticketLot){
    const result = chooseWinner(ticketLot);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [ { id: 8421, name: 'Kendall Gordon', }, 
    { id: 1356, name: 'Chase Walton', },
    { id: 2599, name: 'Nadia Ali', } ]);

checkTestCase(2, [ { id: 2825, name: "Kendall Gordon" },
  { id: 2147, name: "Chase Walton" },
  { id: 3765, name: "Thomas Bond" },
  { id: 2761, name: "Waldo Lynch" },
  { id: 3384, name: "Margot Stanley" },
  { id: 4010, name: "Maria Dawson" },
  { id: 4411, name: "Daley Ferguson" } ]);