/***
 * QUESTION: Given a list of departments and their newsletters, the function should return
 * an alphabetically sorted single dimensional array of newsletters for the given 
 * departments in ‘departmentNamesList’ list.
 * 
 * Note:
 * The departmentNewsletterList may not have all the department names given in departmentNamesList.
 * If none of departments specified in departmentNamesList is present in departmentNewsletterList, then return false.
 * 
 * INPUT:
 *  const departmentNamesList = ['Programming', 'QA'];
 * 
 * OUTPUT:
 *  alpha testing,backend,beta testing,database,frontend,javascript,regression testing,ruby,unit testing
 */

/**
 * Returns list of newsletters for given departments
 *
 * @param {Map<string, {Array.<string>}>} departmentNewsletterList key value pair of department_name and array of newsleters
 * @param {Array.<string>} departmentNamesList list of departments.
 * @returns {(array | boolean)} result
 */
function getNewsletterList(departmentNewsletterList, departmentNamesList){
    let newsletterArray = [];
    departmentNamesList.forEach((department) => {
      if(departmentNewsletterList.has(department)){
        newsletterArray.push(...departmentNewsletterList.get(department));
      }
    });
    return newsletterArray.length > 0 ? newsletterArray.sort() : false;
}

function checkTestCase(num, departmentNewsletterList, departmentNamesList){
    const result = getNewsletterList(departmentNewsletterList, departmentNamesList);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, null, ['Programming', 'QA']);
checkTestCase(2, null, ['Sales', 'Marketing']);
checkTestCase(3, null, ['Design', 'Programming']);
checkTestCase(4, null, ['HR', 'Product Management']);