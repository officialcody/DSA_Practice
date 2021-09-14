/**
 * QUESTION: The function toSnakeCase should convert the input string from PascalCase to snake_case.
 * 
 * INPUT:
 *  const str = "RubyOnRails";
 * 
 * OUTPUT:
 *  ruby_on_rails
 */

// PROVIDED SOLUTION
// const toSnakeCase = (str) => {
//   return (
//     str.slice(0, 1).toLowerCase() +
//     str
//       .split("")
//       .slice(1)
//       .map((char) => {
//         if (char == char.toUpperCase()) return "_" + char.toLowerCase();
//         else return char;
//       })
//       .join("")
//   );
// };

// MY SOLUTION
const toSnakeCase = (str) => {
  let final_arr = [];
  str.split('').forEach((el, index) => {
    if(el === el.toUpperCase() && index !== 0){
      final_arr.push('_');
      final_arr.push(el.toLowerCase());
    } else {
      final_arr.push(el.toLowerCase());
    }
  });
  return final_arr.join('');
};

function checkTestCase(num, str){
  const result = toSnakeCase(str);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, "RubyOnRails");
checkTestCase(2, "WeLoveJavascript");
checkTestCase(3, "PascalCase");
checkTestCase(4, "NBAssociation");