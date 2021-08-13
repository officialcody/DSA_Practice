/***
 * QUESTION: Given an object with vacation details, return the same after adding a startDate 
 * property, in the format of "Fri Dec 07 2018" as per the year and day inputs passed to it.
 * 
 * Note:
 * Only add staryDate property if it not present in the object.
 * Try using Logical nullish assignment.
 * Month should always be set as December.
 * Return stringified object.
 * 
 * INPUT:
 *  const vacationDetails = {
 *      tripId: 5, 
 *      destination: "Wayanad", 
 *      startDate: "Fri Dec 07 2018", 
 *      hotelPhoneNumber: 030303, 
 *      hotelEmailAddress: "hij789@example.com",
 *  };
 *  const day = 09;
 *  const year = 2020;
 * 
 * OUTPUT:
 *  {"tripId":5,"destination":"Wayanad","startDate":"Fri Dec 07 2018","hotelPhoneNumber":12483,"hotelEmailAddress":"hij789@example.com"}
 */

/**
 * Returns updated vacation details
 *
 * @param {Array.<{tripId: number, destination: string, startDate: date, hotelPhoneNumber: number, hotelEmailAddress: string}>} vacationDetails.
 * @param {number} day
 * @param {number} year
 * @param {Array.<{id: number, name: string, state: string, completed: boolean}>} newLocations new locations to be added.
 * @returns {string} result.
 */
function AddMissingProperty(vacationDetails, day, year){
    vacationDetails.startDate ??= new Date(year, 11, day).toDateString();
    return JSON.stringify(vacationDetails);
}

function checkTestCase(num, vacationDetails, day, year){
    const result = AddMissingProperty(vacationDetails, day, year);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, {
    tripId: 5,
    destination: "Wayanad",
    startDate: "Fri Dec 07 2018",
    hotelPhoneNumber: 030303,
    hotelEmailAddress: "hij789@example.com",
  }, 09, 2020);
  
checkTestCase(2, {
    tripId: 4,
    destination: "Ladakh",
    hotelPhoneNumber: 020202,
    hotelEmailAddress: "efg456@example.com",
  }, 15, 2017);

checkTestCase(3,  {
    tripId: 3,
    destination: "Reykjavík",
    hotelPhoneNumber: 010101,
    hotelEmailAddress: "abc123@example.com",
  }, 11, 2016);
