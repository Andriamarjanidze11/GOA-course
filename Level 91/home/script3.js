const baseStats = { defense: 40, durability: 80 };

const enchantment = { durability: 100, magicResist: 25 };

const finalStats = {
    ...baseStats,
    ...enchantment,
    weight: 10
};

console.log(finalStats);
