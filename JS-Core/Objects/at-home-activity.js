// 1 to 3
const createCourse = (name, teacher, studentsCount, weekDay) => {
    const newCourse = {
        name: `${name}`,
        teacher: `${teacher}`,
        studentsCount: `${studentsCount}`,
        weekDay: `${weekDay}`,
    }
    
    return newCourse;
}

const getCourseLabel = (course) => {
    const label = `${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`;
    return label;
}

const course = {
    name: 'Art',
    teacher: 'Dave Pinkleton',
    studentsCount: '25',
    weekDay: 'Tuesday',
}

console.log(`${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`);

const math = createCourse('Math', 'Ms. Atanasova', 31, 'Monday');
const label = getCourseLabel(math);
console.log(label);

