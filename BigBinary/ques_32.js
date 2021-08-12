/***
 * QUESTION: Extract the issue type from given the string
 * Note:
 * Input will be a string.
 * String will start with the issue type.
 * Issue name will be separated by :.
 * 
 * INPUT:
 *  const title = "bug:infinite-spinner-in-home-page";
 * 
 * OUTPUT:
 *  bug
 */

function getIssueType(title){
    return title.substr(0, title.indexOf(":"));
    // const arr = title.split(':');
    // return arr[0];
}

function checkTestCase(num, title){
    const result = getIssueType(title);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, "bug:infinite-spinner-in-home-page");
checkTestCase(2, "feature:delete-multiple-issues-from-list-table");
checkTestCase(3, "hotfix:user-missing-after-deployment");
checkTestCase(4, "feature:facebook-sso");
checkTestCase(5, "feature:edit-attachments-integration");
checkTestCase(6, "bug:broken-image-url");