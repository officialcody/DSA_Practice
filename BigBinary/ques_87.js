/**
 * QUESTION: The function marksInRange should return the object that satisfies the upper and lower limit conditions.
 * Return stringified object.
 * 
 * INPUT:
 *  const marksArr = [
 *   { student: "Phoebe", marks: 44 },
 *   { student: "Ross", marks: 78 },
 *   { student: "Monica", marks: 89 },
 *  ];
 *  const lower_limit = 50;
 *  const upper_limit = 80;
 * 
 * OUTPUT:
 *  [{"student":"Ross","marks":78}]
 */

const marksInRange = (marksArr,upper_limit,lower_limit) => {
  return JSON.stringify(
    marksArr.filter(marks => marks.marks <= upper_limit && marks.marks >= lower_limit)
  );
}

function checkTestCase(num, array, upper_limit, lower_limit){
  const result = marksInRange(array, upper_limit, lower_limit);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, [
  { student: "Phoebe", marks: 44 },
  { student: "Ross", marks: 78 },
  { student: "Monica", marks: 89 },
], 80, 50);

checkTestCase(2, [
  { student: "Bruce", marks: 32 },
  { student: "Tony", marks: 42 },
  { student: "Natasha", marks: 52 },
  { student: "Steve", marks: 62 },
  { student: "Thor", marks: 72 },
  { student: "Clint", marks: 82 },
], 72, 42);

checkTestCase(3, [
  { student: "Frodo", marks: 31 },
  { student: "Sam", marks: 51 },
  { student: "Oliver", marks: 71 },
  { student: "Pippin", marks: 91 },
], 50, 32);