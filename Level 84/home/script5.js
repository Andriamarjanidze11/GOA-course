let studentData = [
    {
    id: 1,
    name: "Nino",
    grades: { Math: [100, 95], Science: [88], History: [92, 90] },
    attendance: [true, true, false, true],
    extracurricular: ["Debate Team", "Art Club"]
    },
    {
    id: 2,
    name: "Giorgi",
    grades: { Math: [60, 65], Science: [70], History: [75, 80] },
    attendance: [false, false, true],
    extracurricular: []
    },
    {
    id: 3,
    name: "Salome",
    grades: { Math: [85], Science: [95, 90], History: [100] },
    attendance: [true, true, true, true],
    extracurricular: ["Debate Team"]
    }
];


studentData.forEach(student => {
    console.log(`Hello, ${student.name}!`);
});

const studentNames = studentData.map(student => student.name);

const studentAverages = studentData.map(student => {
    const allScores = Object.values(student.grades).flat();
    const avg = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
    return { name: student.name, average: avg };
});

const highPerformingStudents = studentAverages.filter(student => student.average >= 85);

const strugglingStudents = studentData.filter(student =>
    Object.values(student.grades).some(subjectScores =>
    subjectScores.every(score => score < 70)
    )
);

const totalExtracurriculars = studentData.reduce((total, student) =>
    total + student.extracurricular.length, 0
);

const allSubjects = {};

studentData.forEach(student => {
    for (const [subject, scores] of Object.entries(student.grades)) {
    if (!allSubjects[subject]) allSubjects[subject] = [];
    allSubjects[subject].push(...scores);
    }
});

const subjectAverages = Object.entries(allSubjects).map(([subject, scores]) => {
    const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { subject, average: avg };
});

const topSubject = subjectAverages.reduce((max, current) =>
    current.average > max.average ? current : max
).subject;

const debateTeamNames = studentData
    .filter(student => student.extracurricular.includes("Debate Team"))
    .map(student => student.name)
    .reduceRight((acc, name, index, arr) =>
    acc ? `${acc} and ${name}` : name, ""
);

const allHaveGoodAttendance = studentData.every(student =>
    student.attendance.filter(present => present).length / student.attendance.length >= 0.5
);

const hasInactiveStudent = studentData.some(student =>
    student.extracurricular.length === 0
);

studentData.forEach(student => {
    for (const [subject, scores] of Object.entries(student.grades)) {
    scores.forEach(score => {
        if (score === 100) {
        console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`);
        }
    });
    }
});