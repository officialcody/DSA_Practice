/****
 * QUESTION: Print the Registration Details
 * 
 * Note:
 *  Modify the caller function to achive the desired output.
 *  Do not rename “callerFn”
 * 
 */

const car = {
    registrationNumber: "LAX1234",
    brand: "Ford",
};
function displayDetails(ownerName) {
    console.log( ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand );
}
const callerFn = displayDetails.bind(car);

// NO TEST CASES