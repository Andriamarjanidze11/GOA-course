class Specimen {
    constructor(id, type) {
    this.id = id;
    this.type = type;
    }

    getLabel() {
        return `Specimen ID: ${this.id}, Type: ${this.type}`;
    }
}

class MutantSpecimen extends Specimen {
    constructor(id, type, mutationLevel) {
    super(id, type);
    this.mutationLevel = mutationLevel;
    }

    getLabel() {
    return `${super.getLabel()}, Mutation Level: ${this.mutationLevel}`;
    }

    static mostMutated(arr) {
    return arr.reduce((max, specimen) =>
        specimen.mutationLevel > max.mutationLevel ? specimen : max
    );
    }
}

const specimens = [
    new MutantSpecimen('A1', 'Virus', 3),
    new MutantSpecimen('B2', 'Bacteria', 7),
    new MutantSpecimen('C3', 'Fungus', 5)
];

console.log(specimens[0].getLabel());
console.log(MutantSpecimen.mostMutated(specimens).getLabel());
