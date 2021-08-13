/***
 * QUESTION: From a given list of teams and and the points scored in each round, 
 * find the team with the higest total points.
 * 
 * Note:
 *  Assuming there won’t be a tie.
 *  Return stringified object.
 * 
 * INPUT:
 *  const teams = [ 
 *      { name: 'Eagles', points: [19, 44, 27, 76, 55] }, 
 *      { name: 'Scorpions', points: [39, 66, 51, 78, 76] }, 
 *      { name: 'Wolves', points: [23, 46, 77, 70, 92] }
 *  ];
 * 
 * OUTPUT:
 *  { "name": "Scorpions" , "totalPoints": 310 }
 */

/**
 * Returns the winning team.
 *
 * @param {Array.<{name: string, points: number}>} teams.
 * @returns {(Object.<{name: string, totalPoints: number}>)} result.
 */

function findWinningTeam(teams) {
    let winningTeam = {
      name: "",
      totalPoints: 0,
    };
    teams.forEach((team) => {
      const totalPoints = team.points.reduce(
        (currentSum, currentValue) => currentSum + currentValue
      );
      if (winningTeam.totalPoints < totalPoints) {
        winningTeam = {
          name: team.name,
          totalPoints: totalPoints,
        };
      }
    });
    return JSON.stringify(winningTeam);
}

function checkTestCase(num, teams){
    const result = findWinningTeam(teams);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
        name: 'Eagles',
        points: [19, 44, 27, 76, 55]
    },
    {
        name: 'Scorpions',
        points: [39, 66, 51, 78, 76]
    },
    {
        name: 'Wolves',
        points: [23, 46, 77, 70, 92]
    }
]);

checkTestCase(2, [
    {
        name: 'Tigers',
        points: [76, 46, 28, 39, 20]
    },
    {
        name: 'Lions',
        points: [23, 93, 88, 92, 83]
    },
    {
        name: 'Pumas',
        points: [65, 21, 26, 22, 53]
    }
]);