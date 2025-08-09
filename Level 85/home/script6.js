const courses = [
    {
    id: "CS101",
    name: "Intro to Computer Science",
    isActive: true,
    capacity: 50,
    credits: 3,
    students: [
        { name: "Ana", grades: [85, 90, 78] },
        { name: "Beqa", grades: [60, 72, 88] }
    ]
    },
    {
    id: "MA201",
    name: "Calculus I",
    isActive: false,
    capacity: 25,
    credits: 4,
    students: [
        { name: "Nino", grades: [95, 88, 92] },
        { name: "Giorgi", grades: [65, 70, 68] }
    ]
    },
    {
    id: "EN301",
    name: "English Literature",
    isActive: true,
    capacity: 40,
    credits: 2,
    students: [
        { name: "Luka", grades: [75, 80, 85] },
        { name: "Tamar", grades: [90, 92, 88] }
    ]
    }
];

const studentNamesString = "Ana,Beqa,Nino,Giorgi,Luka,Tamar";

console.log(Array.isArray(courses));
console.log(Array.isArray(studentNamesString));

const allStudentNames = Array.from(studentNamesString.split(","));
console.log(allStudentNames);

courses.forEach(course => {
    console.log(`Course ID: ${course.id}, Name: ${course.name}`);
});

const courseNames = courses.map(course => course.name);
console.log(courseNames);

const courseAverages = courses.map(course => {
    const allGrades = course.students.flatMap(student => student.grades);
    const average = allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;
    return { id: course.id, averageGrade: Math.round(average) };
});
console.log(courseAverages);

const activeCourses = courses.filter(course => course.isActive);
console.log(activeCourses);

const calculusCourse = courses.find(course => course.id === "MA201");
console.log(calculusCourse);

courses.forEach(course => {
    const allAbove70 = course.students.every(student =>
    student.grades.some(grade => grade >= 70)
    );
    console.log(`${course.name}: All students have ≥70? ${allAbove70}`);
});

const hasLowCapacity = courses.some(course => course.capacity < 30);
console.log(hasLowCapacity);

const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
console.log(coursesByCapacity);

coursesByCapacity.reverse();
console.log(coursesByCapacity);

const totalActiveCredits = activeCourses.reduce((sum, course) => sum + course.credits, 0);
console.log(totalActiveCredits);

const reversedActiveNames = activeCourses.reduceRight((acc, course, index) => {
    return index === activeCourses.length - 1 ? course.name : acc + " - " + course.name;
}, "");
console.log(reversedActiveNames);