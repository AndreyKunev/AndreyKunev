import { employees } from "./employees.js";

// 1 - Write a function findEmployeesInPriceRange that accepts a price range and returns the names of the employees with salaries in that range.

const findEmployeesInPriceRange = (arr, { min = 0, max = Infinity }) => {
    
    const newArr = arr.filter(el => (el.salary >= min && el.salary <= max) ? `${el.name}` : false);
    const mapped = newArr.map(el => `${el.name}`);
    return mapped;
}

// console.log(findEmployeesInPriceRange(employees, { max: 20000 }));
// console.log(findEmployeesInPriceRange(employees, { min: 25000 })); // 11 employees
// console.log(findEmployeesInPriceRange(employees, { min: 15000, max: 30000 })); // 6 employees

// 2- Write a function findEmployeesByCity that accepts a city name and returns a list of employee names 
// and the street that they live at, filtered by city name


const findEmployeesByCity = (arr, city) => {
    
    const newArr = arr.filter(el => el.address.city === city);
    const mapped = newArr.map(el => `${el.name}, ${el.address.street}`);
    return mapped;
}

// console.log(findEmployeesByCity(employees, 'Everett'));
// console.log(findEmployeesByCity(employees, 'Kenmore'));
// console.log(findEmployeesByCity(employees, 'Sofia'));


// 3- Write a function findByProjects that accepts one or more projects 
// and returns reference to the first employee that works on all of the given projects

const findByProjects = (arr, ...projectsMatch) => {
    const searchForMatches =  arr.find(el => el.projects.length > 0 ? el.projects.every(element => projectsMatch.includes(element)) : false);
    return searchForMatches;
}

const emp1 = findByProjects(employees, 'Hydration Pack', 'Fender Set - Mountain', 'Water Bottle');
console.log(emp1);