/**
 * QUESTION: Determine the position of the word “Nemo” and return a string in the following manner: “I found Nemo at [position of the word nemo]!”
 * If there are multiple instance of the word, only return for the first one.
 * If you can’t find Nemo, return “I can’t find Nemo :(“.
 * 
 * INPUT:
 *  const str = "I Nemo am";
 * 
 * OUTPUT:
 *  I found Nemo at 2!
 */

const findNemo = str => {
	const position = str.split(" ").indexOf('Nemo') + 1;
  return position ? `I found Nemo at ${position}!` : "I can't find Nemo :("
}

const findNemo_2 = (str) => {
  let stringArr = str.split(' ');
  if(!stringArr.includes('Nemo')) {
    return `I can't find Nemo :(`;
  }
  for(let i=0;i<stringArr.length;i++){
    if(stringArr[i] === 'Nemo'){
      return `I found Nemo at ${i+1}!`;
    }
  }
}

function checkTestCase(num, str){
  const result = findNemo(str);
  console.log(`Test Case - ${num}`);
  console.log(`${result}`);
}

checkTestCase(1, "I Nemo am");
checkTestCase(2, "I am Dory");
checkTestCase(3, "I am finding Nemo !");
checkTestCase(4, "I am Nemo the real Nemo");