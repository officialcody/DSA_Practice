/***
 * QUESTION: Assign value to the specified key if value is not empty.
 * Note:
 * Input will be a plain object with values of type of string or number.
 * Assign the value to given key if the given value is not empty.
 * Donot update the key if the given value is empty.
 * 
 * INPUT:
 *  const data = { name: "Alex", location: "Kochi", };
 *  var key = "age";
 *  var value = 30;
 * 
 * OUTPUT:
 *  { "name": "Alex", "location": "Kochi", "age": 30 }
 */

function updateData(data, key, value){
    if (value !== null && value !== undefined && value !== "") {
      data[key] = value;
    };
    return data;
}

function checkTestCase(num, data, key, value){
    const result = updateData(data, key, value);
    console.log(`Test Case - ${num}`);
    console.log(`${Object.keys(result)} ${Object.values(result)}`);
}

checkTestCase(1, { name: "Alex", location: "Kochi", }, 'age', 30);
checkTestCase(2, { item: "Pepsi", quantity: 120, }, 'quantity', 0);
checkTestCase(3, { name: "Stuart", location: "Pune", }, 'location', '');
checkTestCase(4, { name: "Juan", pto: 32, }, 'pto', 0);