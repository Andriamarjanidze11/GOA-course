let sportsClub = {
    clubName: 'Real Madrid',
    sportType: 'Football',
    foundedYear: 1902,
    achievments: {
        achievment1: {name1: 'UEFA Champions League/European Cup titles', amount: 15},
        achievment2: {name2: 'LaLiga', amount: 36},
        achievment3: {name3: 'CopadelRey', amount: 20}
    }
};

let stadiumCapacity = {
    capacity: '78,297'
};

console.log(Object.entries(sportsClub));
console.log(Object.values(sportsClub));
console.log(Object.hasOwn(sportsClub, 'sponsors'));
let sportsClub1 = Object.assign({}, sportsClub, stadiumCapacity);
console.log(sportsClub1);
Object.freeze(sportsClub1);
delete sportsClub1.foundedYear;
console.log(Object.isFrozen(sportsClub1));
console.log(sportsClub1)