/***
 * QUESTION: Update the locations where the marketing campaigns have already run, based on 
 * the a list of location Ids. Also add few of new locations which were missed earlier, 
 * right after the second location in the list.
 * 
 * Note:
 * Return stringified object.
 * 
 * INPUT:   
 *  const completedLocationIds = [1, 3];
 *  const campainDetails = [ 
 *      { id: 1, name: "Aizawl", state: "Mizoram", completed: false, },
 *      { id: 2, name: "Kochi", state: "Haryana", completed: false, },
 *      { id: 3, name: "Nagercoil", state: "Tamil Nadu", completed: false, }, ];
 *  const newLocations = [
 *      { id: 4, name: "Kurnool", state: "Andhra Pradesh", completed: false, },
 *      { id: 5, name: "Warangal", state: "Telangana", completed: false, }, ];
 * 
 * OUTPUT:
 *  [ {"id":1,"name":"Aizawl","state":"Mizoram","completed":true},
 *    {"id":2,"name":"Kochi","state":"Haryana","completed":false},
 *  [ {"id":4,"name":"Kurnool","state":"Andhra Pradesh","completed":false},
 *    {"id":5,"name":"Warangal","state":"Telangana","completed":false} ],
 *    {"id":3,"name":"Nagercoil","state":"Tamil Nadu","completed":true} ]
 */

const updateCampaignDetailsMySolution = (campainDetails, completedLocationIds, newLocations) => {
    completedLocationIds.forEach((locationId) => {
      campainDetails.filter(camp => camp.id === locationId).map(camp => camp.completed = true);
    });
    campainDetails.splice(2,0,newLocations);
    return JSON.stringify(campainDetails);
}

const updateCampaignDetailsProvidedSolution = (campainDetails, completedLocationIds, newLocations) => {
    campainDetails = campainDetails.map(location => {
        if (completedLocationIds.includes(location.id)) {
          return {...location, completed: true};
        } else {
          return location;
        }
    });
    campainDetails.splice(2,0,newLocations);
    return JSON.stringify(campainDetails);
}

function checkTestCase(num, campainDetails, completedLocationIds, newLocations){
    const result = updateCampaignDetailsMySolution(campainDetails, completedLocationIds, newLocations);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [
    {
      id: 1,
      name: "Aizawl",
      state: "Mizoram",
      completed: false,
    },
    {
      id: 2,
      name: "Kochi",
      state: "Haryana",
      completed: false,
    },
    {
      id: 3,
      name: "Nagercoil",
      state: "Tamil Nadu",
      completed: false,
    },
  ], [1, 3], [
    {
      id: 4,
      name: "Kurnool",
      state: "Andhra Pradesh",
      completed: false,
    },
    {
      id: 5,
      name: "Warangal",
      state: "Telangana",
      completed: false,
    },
  ]);
checkTestCase(2, [
    {
      id: 1,
      name: "Thrissur",
      state: "Kerala",
      completed: false,
    },
    {
      id: 2,
      name: "	Alandur",
      state: "Tamil Nadu",
      completed: false,
    },
    {
      id: 3,
      name: "Agartala",
      state: "Tripura",
      completed: false,
    },
  ], [1, 3], [
    {
      id: 4,
      name: "Tawang",
      state: "Arunachal Pradesh",
      completed: false,
    },
    {
      id: 5,
      name: "Kohima",
      state: "Nagaland",
      completed: false,
    },
  ]);