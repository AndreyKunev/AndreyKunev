<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Pure Array Functions - Tasks

## Setup

Create a new javascript file (example: `main.js`) and import the collection of employees found in the file `employees.js`. You can implement each new task in a separate function in that single file (`main.js`)

## Intro

In this activity, we will practice the usage of built-in array functions to practice filtering and aggregating collections of complex data.

The functions that we will aim to practice are:
- `reduce`
- `filter`
- `map`
- `find`
- `some`
- `every`
Other functions that are very useful are not actually pure, but we will those as well. A notable example is `sort`.


1. Write a function `findEmployeesInPriceRange` that accepts a price range and returns the names of the employees with salaries in that range.
    - if `min` is not present, assume no lower bound, 
    - if `max` is not present, assume no upper bound. 
    - Min and max are inclusive
    - hint: your best option is a combo of `filter` and `map`
    ```javascript
    console.log(findEmployeesInPriceRange(employees, { max: 20000 })); // [ 'Guy Gilbert', 'Kevin Brown', ...] (9 employees total)
    console.log(findEmployeesInPriceRange(employees, { min: 25000 })); // 11 employees
    console.log(findEmployeesInPriceRange(employees, { min: 15000, max: 30000 })); // 6 employees
    ```

1. Write a function `findEmployeesByCity` that accepts a city name and returns a list of employee names and the street that they live at, filtered by city name
    - the format is `"{name}, {street}"`
    ```javascript
    console.log(findEmployeesByCity(employees, 'Everett'));
    /* [
      'Kevin Brown, 2294 West 39th St.',
      'Ruth Ellerbrock, 5242 Marvelle Ln.',
      'Steven Selikoff, 3385 Crestview Drive'
    ] */
    console.log(findEmployeesByCity(employees, 'Kenmore'));
    /* [
      'Doris Hartwig, 5050 Mt. Wilson Way'
    ] */
    console.log(findEmployeesByCity(employees, 'Sofia'));
    // []
    ```

1. Write a function `findByProjects` that accepts one or more projects and returns reference to the first employee that works on all of the given projects
    - hint: use a combination of `find` and `every` 
    ```javascript
    const emp1 = findByProjects(employees, 'Hydration Pack', 'Fender Set - Mountain', 'Water Bottle');
    // emp1.name should be JoLynn Dobney

    const emp2 = findByProjects(employees, 'Hydration Pack', 'Fender Set - Mountain');
    // emp2.name should be Thierry D'Hers

    const emp3 = findByProjects(employees, 'Hydration Pack', 'ML Fork');
    // emp3 should be null (no such employee)

    const emp4 = findByProjects(employees);
    // emp4 should be null (no such employee)
    ```

## Intermediate Tasks

The following tasks are slightly more challenging. They can all be solved using the `reduce` function, but it will be quite difficult at first. After you are done with the first one, the next should be easier.

4. Write a function `getDepartments` that returns all unique departments
    ```javascript
    console.log(getDepartments(employees));
    /* [
      'Production',
      'Marketing',
      'Engineering',
      'Tool Design',
      'Purchasing'
    ] */
    ```

4. Write a function `getProjects` that returns all unique projects
    ```javascript
    console.log(getProjects(employees));
    /* 
    15 unique projects
    [
      'Road Bottle Cage',
      'Touring Pedal',
      .. 
    ] */
    ```

4. Write a function `getDepartmentsWithEmployeesCount` that returns all departments with the number of employees that work there.
    - the function should return an object with the department names as keys for that object
      ```javascript
      console.log(getDepartmentsWithEmployeesCount(employees))
      /* {
        Production: 12,
        Marketing: 1,
        Engineering: 4,
        'Tool Design': 2,
        Purchasing: 1
      } */
      ```

4. Write a function `getEmployeeWithMaxSalary` that returns the employee with the highest salary
      ```javascript
      console.log(getEmployeeWithMaxSalary(employees))
      /* {
        name: 'Terri Duffy',
        salary: 63500,
        ... more properties
      } */
      ```
## Hard Task

The following task is very difficult. It will require you to combine most of the practiced pure array functions to solve elegantly.

8. Write a function `getCitiesByPopulation` that accepts a number N and returns the top N towns by population (where most employees live)
      - return info about each city in format `{ name: string, population: number}`
      ```javascript
      console.log(getCitiesByPopulation(employees, 1));
      // [ { name: 'Everett', population: 3 } ]

      console.log(getCitiesByPopulation(employees, 3));
      /* [
        { name: 'Everett', population: 3 },
        { name: 'Redmond', population: 3 },
        { name: 'Monroe', population: 2 }
      ] */
      ```
