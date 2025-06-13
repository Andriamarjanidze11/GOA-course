let cinema = {
    name: "Galaxy Cinema",
    location: "Saguramo, Georgia",
    moviesCount: 12,
};

console.log("Cinema Details:");
console.log(cinema);

console.log("Has vipSeats?", "vipSeats" in cinema);

let updatedCinema = { ...cinema, ticketPrice: 15 };
console.log("Updated cinema:", updatedCinema);

Object.freeze(updatedCinema);

updatedCinema.ticketPrice = 20;
console.log("Ticket price after change attempt:", updatedCinema.ticketPrice);

console.log("Is cinema frozen?", Object.isFrozen(updatedCinema));