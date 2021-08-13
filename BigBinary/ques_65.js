/***
 * QUESTION: We have the latest details of a number of respondents for a Practice Question 
 * Challenge. We need to evaluate total questions they answered in each section. This value 
 * should be set to a newly created totalCount property.
 * 
 * NOTE:
 *  The count of sections in each input may vary.
 *  Return stringified object.
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
 * Returns an updated respondents details.
 *
 * @param {Array.<{section1: number, section2: number, ...section'N': number}>} respondentDetails
 * @return {array} result
 */
function setTotalCount(respondentDetails) {
    const newRespondentDetails = respondentDetails.map(respondent => {
      return {
        ...respondent,
        totalCount: Object.values(respondent).reduce((a,b) => a+b),
      };
    });
    return JSON.stringify(newRespondentDetails);
}

function checkTestCase(num, respondentDetails){
    const result = setTotalCount(respondentDetails);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      html: 30,
      css: 11,
      javascript: 23,
      react: 21,
    },
    {
      html: 30,
      css: 27,
      javascript: 15,
      ruby: 25,
    },
    {
      html: 30,
      css: 15,
      javascript: 19,
      ruby: 25,
      sql: 27,
      tailwindCSS: 15
  
    },
  ]);

checkTestCase(2, [
  {
    html: 30,
    css: 27
  },
  {
    html: 29,
    css: 24,
    javascript: 17,
  },
  {
    html: 30,
    css: 15,
    javascript: 19,
    ruby: 19,
    sql: 25
  },
]);