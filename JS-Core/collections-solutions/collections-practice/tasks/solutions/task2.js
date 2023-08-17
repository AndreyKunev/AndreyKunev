// People with cities and population
/**
 * 
 * @param {{cities: Array<{ id: number, name: string }>, people: Array<{ name: string, city: number }>}} data 
 */
export default function (data) {
  // your code starts here

  const newPeopleArr = data.people.map(person => {
    const newPerson = {};
    newPerson.name = person.name;
    newPerson.city = {};
    let populationCount = 0;
    data.people.filter(el => el.city === person.city ? populationCount++ : false);
    data.cities.filter(el => el.id === person.city ? newPerson.city.name = el.name : false);
    newPerson.city.population = populationCount;
    return newPerson;
});

return newPeopleArr;
  // your code ends here
}
