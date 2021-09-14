/**
 * QUESTION: The function isEmpty should return true if an object is empty else return false.
 * 
 * INPUT:
 *  const obj = {};
 * 
 * OUTPUT:
 *  true
 */
const isEmpty = (obj) => {
  if (obj == null) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

function checkTestCase(num, obj){
  const result = isEmpty(obj);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, {});
checkTestCase(2, null);
checkTestCase(3, undefined);
checkTestCase(4, {1:'hello'});
checkTestCase(5, new Number());
checkTestCase(6, new Date());