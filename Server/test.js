const data = require("./node_modules/indian-cities-json/cities");
const cities = data.cities;
 const ListofCities = cities.filter(d => d.state == "Haryana");
 const ListOfStudentName = ListofCities.map(({name: value})=>value);
 console.log(ListOfStudentName);