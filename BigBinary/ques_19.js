/***
 * QUESTION: Findout the issues from the list with the given severity.
 * Note:
 * Find out the issues from the list of issues with the given severity.
 * Every issue will contain a key severity.
 * Filter the issues with the specified severity.
 * 
 * INPUT:
 *  const issues = [
 *      { title: "View is not symmetric", severity: "low", assignee: "Eric", },
 *      { title: "Title color is not as per design", severity: "medium", assignee: "John", },
 *      { title: "Oliver is not able to login", severity: "high", assignee: "Eric", },
 *      { title: "Submit button is disabled", severity: "high", assignee: "John", },
 *      { title: "Table content overflowing", severity: "medium", assignee: "John", 
 *  ];
 *  const severity = "medium";
 * 
 * OUTPUT:
 *  [   { "title": "Title color is not as per design", "severity": "medium", "assignee": "John" }, 
 *      { "title": "Table content overflowing", "severity": "medium", "assignee": "John" } ]
 */

function filterIssues(issues, severity){
    return issues.filter((issue) => issue.severity === severity);
}

function checkTestCase(num, issues, severity) {
    const result = filterIssues(issues, severity);
    console.log(`Test Case - ${num}`);
    result.forEach((r) => console.log(`${Object.keys(r)} ${Object.values(r)}`));
}

checkTestCase(1, [
    {
      title: "View is not symmetric",
      severity: "low",
      assignee: "Eric",
    },
    {
      title: "Title color is not as per design",
      severity: "medium",
      assignee: "John",
    },
    {
      title: "Oliver is not able to login",
      severity: "high",
      assignee: "Eric",
    },
    {
      title: "Submit button is disabled",
      severity: "high",
      assignee: "John",
    },
    {
      title: "Table content overflowing",
      severity: "medium",
      assignee: "John",
    }
  ], "medium");
checkTestCase(2, [
    {
      title: "View is not symmetric",
      severity: "low",
      assignee: "Eric",
    },
    {
      title: "Title color is not as per design",
      severity: "medium",
      assignee: "John",
    },
    {
      title: "Oliver is not able to login",
      severity: "high",
      assignee: "Eric",
    },
    {
      title: "Submit button is disabled",
      severity: "high",
      assignee: "John",
    },
    {
      title: "Table content overflowing",
      severity: "medium",
      assignee: "John",
    }
  ], "high");
checkTestCase(3, [
    {
      title: "View is not symmetric",
      severity: "low",
      assignee: "Eric",
    },
    {
      title: "Title color is not as per design",
      severity: "medium",
      assignee: "John",
    },
    {
      title: "Oliver is not able to login",
      severity: "high",
      assignee: "Eric",
    },
    {
      title: "Submit button is disabled",
      severity: "high",
      assignee: "John",
    },
    {
      title: "Table content overflowing",
      severity: "medium",
      assignee: "John",
    }
  ], "low");