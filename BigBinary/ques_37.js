/***
 * QUESTION: Given an array of object with all the departments & their specific count in 
 * an office, the function should return the total count of the office.
 * 
 * Note:
 * count property of departmentCount object will always be of the type integer.
 * 
 * INPUT:
 *  const departmentCount = [
 *      { department: "Development", count: 31 },
 *      { department: "QA", count: 29 },
 *      { department: "Sales", count: 10 },
 *      { department: "Design", count: 4 },
 *      { department: "HR", count: 3 }\
 *  ];
 * 
 * OUTPUT:
 *  77
 */

/**
 * Returns count of the given department.
 *
 * @param {Array.<{department: string, count: number}>} departmentCount.
 * @returns {number} result
 */
function getOfficeStrength(departmentCount){
    return departmentCount.reduce((totalCount, {count}) => {
      return totalCount + count;
    }, 0);
}

function checkTestCase(num, departmentCount){
    const result = getOfficeStrength(departmentCount);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      department: "Development",
      count: 31
    },
    {
      department: "QA",
      count: 29
    },
    {
      department: "Sales",
      count: 10
    },
    {
      department: "Design",
      count: 4
    },
    {
      department: "HR",
      count: 3
    }
  ]);

checkTestCase(2, [
  {
    department: "Development",
    departmentId: '007',
    count: 09
  },
  {
    department: "QA",
    departmentId: '221',
    count: 2
  },
  {
    department: "Design",
    departmentId: '42',
    count: 3
  },
  {
    department: "HR",
    departmentId: '1',
    count: 1
  }
]);