// Students graduation

/**
 * 
 * @param {{ course: string, passingGrade: number, students: Array<{id: number, name: string}>, grades: Array<{ studentId: number, grade: number}>, exams: Array<{ studentId: number, grade: number }>} data 
 */
export default function (data) {
  // your code starts here
  const getGradeAvg = (studentObj) => {
    let numOfGrades = 0;
    const gradeTotal = data.grades.reduce((acc, el) => {
      if (el.studentId === studentObj.id || el.studentName === studentObj.name) {
        numOfGrades++;
        return acc + el.grade;
      } else {
        return acc;
      }
    }, 0);
    return (gradeTotal / numOfGrades).toFixed(1);
  };

  const getExamAvg = (studentObj) => {
    let numOfGrades = 0;
    const gradeTotal = data.exams.reduce((acc, el) => {
      if (el.studentId === studentObj.id || el.studentName === studentObj.name) {
        numOfGrades++;
        return acc + el.grade;
      }
      else {
        return acc;
      }
    }, 0);
    const examArr = [gradeTotal, numOfGrades];

    return examArr;
  }

  const gradeTotal = (studentObj) => {
    const gradeWeight = (getGradeAvg(studentObj)) / 10 * 4;
    const examCheck = getExamAvg(studentObj);
    let examWeight;
    if (isNaN(examCheck[0] / examCheck[1])) {
      examWeight = 0;
    } else {
      examWeight = ((examCheck[0] / examCheck[1]).toFixed(1)) / 10 * 6;
    }
    return Number((gradeWeight + examWeight).toFixed(1));
  }

  const createStudentObj = (studentObj) => {
    const student = { id: studentObj.id, name: studentObj.name };
    const gradeFinal = gradeTotal(studentObj);
    const examCheck = getExamAvg(studentObj);
    if (examCheck[1] < 2 && gradeFinal < data.passingGrade) {
      student.reason = 'score and exams';
    } else if (gradeFinal < data.passingGrade) {
      student.reason = 'score';
    } else if (examCheck[1] < 2) {
      student.reason = 'exams';
    } else {
      student.grade = gradeFinal;
    }

    return student;
  };

  const courseObj = { name: data.course };
  const graduateArr = data.students.reduce((acc, el) => {
    const student = createStudentObj(el);
    if (student.hasOwnProperty('grade')) {
      acc.push(student);
    }
    return acc;
  }, [])
  const nonGraduateArr = data.students.reduce((acc, el) => {
    const student = createStudentObj(el);
    if (student.hasOwnProperty('reason')) {
      acc.push(student);
    }
    return acc;
  }, [])

  courseObj.graduates = [...graduateArr];
  courseObj.nonGraduates = [...nonGraduateArr];

  return courseObj;
  // your code ends here
}
