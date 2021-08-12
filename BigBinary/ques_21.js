/*****
 * QUESTION: List all cars that are manufactured in the given region.
 * Note:
 * Find all the cars that are manufactured in the given region
 * You will be given the list of manufacturers with their region and list of car names.
 * Filter the manufacturers of the given region and display the cars manufactured by them.
 * 
 * INPUT:
 *  const manufacturers = [
 *      { name: "Ford", region: "USA", cars: ["Fusion", "EcoSport", "Explorer", "Ranger", "Edge", "Escape"], },
 *      { name: "Suzuki", region: "Asia", cars: ["Carry Truck", "Carry Dump Truck", "Jimny", "Landy"], },
 *      { name: "PSA Peugeot-Citroën", region: "Europe", cars: ["Peugeot 504", "Citroën GS", "Citroën CX", "Simca 1307-08", "Simca Horizon"], },
 *      { name: "Fiat-Chrysler", region: "Europe", cars: ["Alfa Romeo", "Pacifica", "Fiat 500X", "Fiat Egea"], },
 *      { name: "Honda", region: "Asia", cars: ["Civic", "Clarity", "CRV", "Freed", "S660", "Shuttle", "Legend"], },
 *      { name: "Jeep", region: "USA", cars: ["Waggoneer", "Wrangler", "Cherokee", "Compass", "Renegade", "Gladiator"], },
 *  ];
 *  const region = "USA";
 * 
 * OUTPUT:
 *  [ "Fusion", "EcoSport", "Explorer", "Ranger", "Edge", "Escape", "Waggoneer", "Wrangler", "Cherokee", "Compass", "Renegade", "Gladiator" ]
 */

function getCarsByRegionMySolution(manufactures, region){
    let carsList = [];
    manufactures.filter((manufacture) => manufacture.region === region).map((manufacture) => carsList.push(...manufacture.cars));
    return carsList;
}

function getCarsByRegionProvidedSolution(manufacturers, region){
    const manufacturersOfRegion = manufacturers.filter((manufacturer) => {
      return manufacturer.region === region;
    });
    const carsOfRegion = manufacturersOfRegion.reduce((carsOfRegion, manufacturer) => {
      carsOfRegion = carsOfRegion.concat(manufacturer.cars);
      return carsOfRegion;
    }, []);
    return carsOfRegion;
}

function checkTestCase(num, manufacturers, region) {
    const result = getCarsByRegionMySolution(manufacturers, region);
    console.log(`Test Case - ${num}`);
    console.log(result);
}

checkTestCase(1, [
    {
      name: "Ford",
      region: "USA",
      cars: ["Fusion", "EcoSport", "Explorer", "Ranger", "Edge", "Escape"],
    },
    {
      name: "Suzuki",
      region: "Asia",
      cars: ["Carry Truck", "Carry Dump Truck", "Jimny", "Landy"],
    },
    {
      name: "PSA Peugeot-Citroën",
      region: "Europe",
      cars: ["Peugeot 504", "Citroën GS", "Citroën CX", "Simca 1307-08", "Simca Horizon"],
    },
    {
      name: "Fiat-Chrysler",
      region: "Europe",
      cars: ["Alfa Romeo", "Pacifica", "Fiat 500X", "Fiat Egea"],
    },
    {
      name: "Honda",
      region: "Asia",
      cars: ["Civic", "Clarity", "CRV", "Freed", "S660", "Shuttle", "Legend"],
    },
    {
      name: "Jeep",
      region: "USA",
      cars: ["Waggoneer", "Wrangler", "Cherokee", "Compass", "Renegade", "Gladiator"],
    },
  ], "USA");

checkTestCase(2, [
    {
      name: "Ford",
      region: "USA",
      cars: ["Fusion", "EcoSport", "Explorer", "Ranger", "Edge", "Escape"],
    },
    {
      name: "Suzuki",
      region: "Asia",
      cars: ["Carry Truck", "Carry Dump Truck", "Jimny", "Landy"],
    },
    {
      name: "PSA Peugeot-Citroën",
      region: "Europe",
      cars: ["Peugeot 504", "Citroën GS", "Citroën CX", "Simca 1307-08", "Simca Horizon"],
    },
    {
      name: "Fiat-Chrysler",
      region: "Europe",
      cars: ["Alfa Romeo", "Pacifica", "Fiat 500X", "Fiat Egea"],
    },
    {
      name: "Honda",
      region: "Asia",
      cars: ["Civic", "Clarity", "CRV", "Freed", "S660", "Shuttle", "Legend"],
    },
    {
      name: "Jeep",
      region: "USA",
      cars: ["Waggoneer", "Wrangler", "Cherokee", "Compass", "Renegade", "Gladiator"],
    },
  ], "Asia");

checkTestCase(3, [
    {
      name: "Ford",
      region: "USA",
      cars: ["Fusion", "EcoSport", "Explorer", "Ranger", "Edge", "Escape"],
    },
    {
      name: "Suzuki",
      region: "Asia",
      cars: ["Carry Truck", "Carry Dump Truck", "Jimny", "Landy"],
    },
    {
      name: "PSA Peugeot-Citroën",
      region: "Europe",
      cars: ["Peugeot 504", "Citroën GS", "Citroën CX", "Simca 1307-08", "Simca Horizon"],
    },
    {
      name: "Fiat-Chrysler",
      region: "Europe",
      cars: ["Alfa Romeo", "Pacifica", "Fiat 500X", "Fiat Egea"],
    },
    {
      name: "Honda",
      region: "Asia",
      cars: ["Civic", "Clarity", "CRV", "Freed", "S660", "Shuttle", "Legend"],
    },
    {
      name: "Jeep",
      region: "USA",
      cars: ["Waggoneer", "Wrangler", "Cherokee", "Compass", "Renegade", "Gladiator"],
    },
  ], "Europe");