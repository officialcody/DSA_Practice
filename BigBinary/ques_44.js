/****
 * QUESTION: For research purposes, a team of doctors are looking to find the list of diseases 
 * that are prevalent in the cities that are affected with COVID-19.
 * 
 * Note:
 * The return value should not contain the word COVID-19.
 * Not all cities are affected by ‘COVID-19’.
 * The term used will always be ‘COVID-19’.
 * 
 * INPUT:
 *  const locations =  [
 *      { "id": 1, "name": "Gotham", "diseases": ['COVID-19', 'Disease-A', 'Disease-B'] }, 
 *      { "id": 2, "name": "NeverLand", "diseases": ['Disease-R', 'Disease-H', 'Disease-G']}, 
 *      { "id": '3', "name": "Asgard", "diseases": ['Disease-L', 'COVID-19', 'Disease-B'] }
 *  ];
 * 
 * OUTPUT:
 *  Disease-A,Disease-B,Disease-L
 */

/**
 * Returns an array of diseases
 *
 * @param {Array.<{id: number, name: string, diseases: Array.<string>}>} locations details of each locations.
 * @returns {Array.<string>} result
 */
const findOtherDiseases = (locations) => {
    const diseases = locations.reduce((diseases, location) => {
      if(location.diseases.includes('COVID-19')){
        diseases = diseases.concat(...location.diseases);
      }
      return diseases;
    }, []);
    let diseaseSet = new Set(diseases);
    diseaseSet.delete('COVID-19');
    return [...diseaseSet];
}

function checkTestCase(num, locations){
    const result = findOtherDiseases(locations);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
        "id": 1,
        "name": "Gotham",
        "diseases": ['COVID-19', 'Disease-A', 'Disease-B']
    },
    {
        "id": 2,
        "name": "NeverLand",
        "diseases": ['Disease-R', 'Disease-H', 'Disease-G']
    },
    {
        "id": '3',
        "name": "Asgard",
        "diseases": ['Disease-L', 'COVID-19', 'Disease-B']
    }
]);

checkTestCase(2, [
    {
        "id": '1',
        "name": "Shire",
        "diseases": ['Disease-G', 'Disease-A', 'Disease-L']
    },
    {
        "id": 2,
        "name": "Galaxy",
        "diseases": ['Disease-S', 'Disease-H', 'Disease-I']
    },
    {
        "id": 3,
        "name": "Narnia",
        "diseases": ['COVID-19', 'Disease-R', 'Disease-E']
    },
    {
        "id": 3,
        "name": "Somewhere",
        "diseases": ['COVID-19', 'Disease-P', 'Disease-N']
    }
]);