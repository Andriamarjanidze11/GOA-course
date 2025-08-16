const basic = {
    warmup: "Jumping Jacks",
    cardio: "Running",
    strength: "Push-ups"
};

const advanced = {
    endurance: "Burpees",
    flexibility: "Yoga",
    balance: "Plank"
};

const total = Object.assign({}, basic, advanced);

console.log(total);