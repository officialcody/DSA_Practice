/****
 * QUESTION: Given details of an employee, the function should return an updated version with 
 * the experience property incremented and a new property age calculated from yearOfBirth 
 * property added to it.
 * 
 * NOTE:
 *  If the ‘experience’ property is missing, then add it with a initial value of 1.
 *  Return stringified object.
 * 
 * INPUT:
 *  const employeeDetailsAtJoining = {
 *      userId: 1,
 *      fullName: "Hercule Poirot",
 *      firstName: "Hercule",
 *      lastName: "Poirot",
 *      experience: 2,
 *      yearOfBirth: 1990,
 *      phoneNumber: 203203,
 *      emailAddress: "whitehaven.mansions@example.com",
 *  };
 * 
 * OUTPUT:
 *  {"userId":1,"fullName":"Hercule Poirot","firstName":"Hercule","lastName":"Poirot","experience":3,"yearOfBirth":1990,"phoneNumber":203203,"emailAddress":"whitehaven.mansions@example.com","age":31}
 */

/**
 * Returns updated employee details
 *
 * @param {Array.<{userId: number, fullName: string, firstName: string, lastName: string, experience: number, yearOfBirth: number, phoneNumber: number, emailAddress: string}>} employeeDetailsAtJoining.
 * @returns {string} result.
 */
function updatedEmployeeDetails(employeeDetailsAtJoining){
    const currentYear = new Date().getFullYear();
    employeeDetailsAtJoining = {
        ...employeeDetailsAtJoining,
        age: currentYear - employeeDetailsAtJoining.yearOfBirth,
        experience: employeeDetailsAtJoining.experience ? employeeDetailsAtJoining.experience + 1 : 1
    };
    return JSON.stringify(employeeDetailsAtJoining);
}

function checkTestCase(num, employeeDetailsAtJoining){
    const result = updatedEmployeeDetails(employeeDetailsAtJoining);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, {
    userId: 1,
    fullName: "Hercule Poirot",
    firstName: "Hercule",
    lastName: "Poirot",
    experience: 2,
    yearOfBirth: 1990,
    phoneNumber: 203203,
    emailAddress: "whitehaven.mansions@example.com",
  });

checkTestCase(2, {
  userId: 2,
  fullName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  yearOfBirth: 1995,
  phoneNumber: 010101,
  emailAddress: "nowhere@example.com",
});