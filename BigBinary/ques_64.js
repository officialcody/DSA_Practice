/****
 * QUESTION: We have the latest details of a number of respondents for a Practice Question 
 * Challenge. We need to evaluate total questions they answered in each section. This 
 * value should be set to a newly created totalCount property.
 * 
 * Note:
 * The section properties will have values at all times.
 * Return stringified object.
 * 
 * INPUT:
 *  let respondentDetails = [
 *      { name: "Jacqueline", html: 30, css: 11, javascript: 23, },
 *      { name: "Dawson", html: 30, css: 27, javascript: 15, },
 *      { name: "Jocelyn", html: 30, css: 15, javascript: 19, },
 *  ];
 * 
 * OUTPUT:
 *  [{"name":"Jacqueline","html":30,"css":11,"javascript":23,"totalCount":64},{"name":"Dawson","html":30,"css":27,"javascript":15,"totalCount":72},{"name":"Jocelyn","html":30,"css":15,"javascript":19,"totalCount":64}]
 */

/**
 * Returns an updated respondents details.
 *
 * @param {Array.<{name: String, html: number, css: number, javascript: number}>} respondentDetails
 * @return {array} result
 */
function setTotalCountMySolution(respondentDetails) {
    respondentDetails.forEach(respondent => {
      respondent['totalCount'] = respondent['html'] + respondent['css'] + respondent['javascript'];
    });
    return JSON.stringify(respondentDetails);
}

function setTotalCountProvidedSolution(respondentDetails) {
    const result = respondentDetails.map((respondent) => {
     return {
       ...respondent,
       totalCount: respondent.html + respondent.css + respondent.javascript
     };  
   })
   return JSON.stringify(result);
}

function checkTestCase(num, respondentDetails){
    const result = setTotalCountMySolution(respondentDetails);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      name: "Jacqueline",
      html: 30,
      css: 11,
      javascript: 23,
    },
    {
      name: "Dawson",
      html: 30,
      css: 27,
      javascript: 15,
    },
    {
      name: "Jocelyn",
      html: 30,
      css: 15,
      javascript: 19,
    },
  ]);

checkTestCase(2, [
  {
    name: "Jacqueline",
    html: 30,
    css: 11,
    javascript: 23,
  },
  {
    name: "Dawson",
    html: 30,
    css: 27,
    javascript: 15,
  },
  {
    name: "Jocelyn",
    html: 30,
    css: 15,
    javascript: 19,
  },
]);

checkTestCase(3, [
    {
      name: "Jacqueline",
      html: 30,
      css: 11,
      javascript: 23,
    },
    {
      name: "Dawson",
      html: 30,
      css: 27,
      javascript: 15,
    },
    {
      name: "Jocelyn",
      html: 30,
      css: 15,
      javascript: 19,
    },
  ]);