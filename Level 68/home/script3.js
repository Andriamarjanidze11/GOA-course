let hotel = {
    hotelName: 'Transilvania',
    stars: 4,
    location: 'Miami',
    guestReviews: {
        guest1: {stars1: 4},
        guest2: {stars2: 3},
        guest3: {stars3: 5}
    }
};

let roomsCount = {
    count: '500000'
};

console.log(Object.entries(hotel));
console.log(Object.hasOwn(hotel,'spa'));
console.log(Object.assign(hotel, roomsCount));
Object.freeze(hotel);
console.log(Object.delete(hotel, 'stars'));
console.log(Object.isFrozen(hotel));

