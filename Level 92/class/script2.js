class Operative {
    constructor(name, rank) {
    this.name = name;
    this.rank = rank;
    }

    getInfo() {
    return `Operative ${this.name}, Rank: ${this.rank}`;
    }

    static compareRanks(op1, op2) {
    const rankOrder = ['Cadet', 'Lieutenant', 'Commander', 'Captain', 'General'];
    const r1 = rankOrder.indexOf(op1.rank);
    const r2 = rankOrder.indexOf(op2.rank);

    if (r1 > r2) return `${op1.name} outranks ${op2.name}`;
    if (r1 < r2) return `${op2.name} outranks ${op1.name}`;
    return `${op1.name} and ${op2.name} hold the same rank`;
    }
}

class EliteOperative extends Operative {
    constructor(name, rank, specialty) {
    super(name, rank);
    this.specialty = specialty;
    }

    getInfo() {
    return `Elite Operative ${this.name}, Rank: ${this.rank}, Specialty: ${this.specialty}`;
    }
}

const op1 = new Operative('Jamal', 'Lieutenant');
const op2 = new EliteOperative('Zoro', 'Captain', 'Stealth Recon');

console.log(op1.getInfo());
console.log(op2.getInfo());

console.log(Operative.compareRanks(op1, op2));