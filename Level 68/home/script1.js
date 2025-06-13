let university = {
    name: 'Harvard',
    departments: 10,
    website: 'https://www.harvard.edu/',
    ratings: {
        student1: { name1: 'Ben', rating1: '10/10' },
        student2: { name1: 'LeBron', rating1: '8/10' },
        student3: { name1: 'Lisa', rating1: '9/10' }
    }
};

let studentsCount = {
    studentCount: 100000
};

console.log(Object.entries(university));
console.log(Object.hasOwn(university, 'scholarship'));

let harvard1 = Object.assign({}, university, studentsCount);
console.log(harvard1);

Object.freeze(harvard1);
delete harvard1.website;
console.log(Object.isFrozen(harvard1));

console.log(harvard1);
