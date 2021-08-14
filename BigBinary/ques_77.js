/****
 * QUESTION: Find the curried sum
 * 
 * Note:
 *  Function accepts paramets a, b, c, d
 *  In the form of fn(a)(b)(c)(d)
 * 
 * INPUT:
 *  const a = 10;
 *  const b = 20;
 *  const c = 30;
 *  const d = 40;
 * 
 * OUTPUT:
 *  100
 *  
 */

const sum = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            };
        };
    };
};

function checkTestCase(num, a, b, c, d){
    const result = sum(a)(b)(c)(d);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 10,20,30,40,50);
checkTestCase(2, 5,10,15,20,50);
checkTestCase(3, 110,220,300,500,50);