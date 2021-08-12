/***
 * QUESTION: Return object with issues grouped by severity.
 * Note:
 * Input will be list of issues.
 * Issue will contain a key severity with string value.
 * Return an object with severity as key and list of assignees as value.
 * 
 * INPUT: 
 *  const issues = [
 *      { title: "View is not symmetric", severity: "low", assignee: "Eric", },
 *      { title: "Title color is not as per design", severity: "medium", assignee: "John", },
 *      { title: "Oliver is not able to login", severity: "high", assignee: "Eric", },
 *      { title: "Submit button is disabled", severity: "high", assignee: "John", },
 *      { title: "Table content overflowing", severity: "medium", assignee: "John", }
 *  ];
 * 
 * OUTPUT:
 *  { "low": [ "Eric" ], "medium": [ "John", "John" ], "high": [ "Eric", "John" ] }
 * 
 */

function groupBySeverity(issues){
    let group = {};
    issues.forEach((issue) => {
      if(group[issue.severity]){
        group[issue.severity].push(issue.assignee);
      } else {
        group[issue.severity] = [issue.assignee];
      }
    });
    return group;
}

function checkTestCase(num, issues){
    const result = groupBySeverity(issues);
    console.log(`Test Case - ${num}`);
    console.log(`${Object.keys(result)} ${Object.values(result)}`);
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
  ]);