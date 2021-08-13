/***
 * QUESTION: A group of people were asked to tell the name a latest Indian movie that they 
 * really loved. From the given list of the survey answers, find a alphabetically 
 * sorted unique list of these movie names.
 * 
 * Note:
 *  Return stringified object.
 * 
 * INPUT:
 *  let surveyAnswers = [ 
 *      { name: "Jacqueline", favoriteIndianMovie: "Kumbalangi Nights", }, 
 *      { name: "Dawson", favoriteIndianMovie: "Thappad", }, 
 *      { name: "Jocelyn", favoriteIndianMovie: "Karnan", }, 
 *      { name: "Palmer", favoriteIndianMovie: "Kumbalangi Nights", },
 *  ];
 * 
 * OUTPUT:
 *  ["Karnan","Kumbalangi Nights","Thappad"]
 */

/**
 * Returns a unique array of Indian Movies found.
 *
 * @param {Array.<{name: String, favoriteIndianMovie: String}>} surveyAnswers
 * @return {array} result
 */
function getIndianMovies(surveyAnswers) {
    // return JSON.stringify([...new Set(surveyAnswers.map(a=>a.favoriteIndianMovie).sort())]); // my solution
    const result = surveyAnswers.map(a => a.favoriteIndianMovie).sort();
    return JSON.stringify([...new Set(result)]);
}

function checkTestCase(num, surveyAnswers){
    const result = getIndianMovies(surveyAnswers);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      name: "Jacqueline",
      favoriteIndianMovie: "Kumbalangi Nights",
    },
    {
      name: "Dawson",
      favoriteIndianMovie: "Thappad",
    },
    {
      name: "Jocelyn",
      favoriteIndianMovie: "Karnan",
    },
    {
      name: "Palmer",
      favoriteIndianMovie: "Kumbalangi Nights",
    },
  ]);
  
checkTestCase(2, [
    {
      name: "Arun",
      favoriteIndianMovie: "Tumbaad",
    },
    {
      name: "Ali",
      favoriteIndianMovie: "Kammatti Paadam",
    },
    {
      name: "Jocelyn",
      favoriteIndianMovie: "Asuran",
    },
    {
      name: "Palmer",
      favoriteIndianMovie: "Super Deluxe",
    },
  ]);
  
checkTestCase(3, [
    {
      name: "Rohit",
      favoriteIndianMovie: "Utharam",
    },
    {
      name: "Ismail",
      favoriteIndianMovie: "Ratsasan",
    },
    {
      name: "Peter",
      favoriteIndianMovie: "Ratsasan",
    },
    {
      name: "Roy",
      favoriteIndianMovie: "Psycho",
    },
  ]);