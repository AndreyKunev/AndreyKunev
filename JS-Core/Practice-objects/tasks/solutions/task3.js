// Graduates
/**
 * 
 * @param {{
    course: string;
    minPassingGrade: number;
    students: {
        name: string;
        grades: number[];
    }[];
}} data 
 */
export default function (data) {
  // your code starts here
  const newObj = {};

const getAverage = (arr) => {
  let sum = 0;
  let avg = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += element;
  }
  
  avg = Number((sum / arr.length).toFixed(1));
  
  return avg;
}

newObj.course = data.course;
newObj.minPassingGrade = data.minPassingGrade;
newObj.graduates = [];
newObj.courseAverage = 0;
let graduateGrades = [];

for (let index = 0; index < data.students.length; index++) {
  const objArr = [...data.students[index].grades];
  const avgGrade = getAverage(objArr); 
  
  if (avgGrade >= newObj.minPassingGrade) {
    const tempObj = {};
    tempObj.name = data.students[index].name;
    tempObj.score = avgGrade;
    
    newObj.graduates.push(tempObj);
    graduateGrades.push(avgGrade);
  }
  
}

isNaN(getAverage(graduateGrades)) ? newObj.courseAverage = 0 : newObj.courseAverage = getAverage(graduateGrades);

return newObj;
  // your code ends here
}
