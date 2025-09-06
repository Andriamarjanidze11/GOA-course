class Sequence {
    constructor(code, lenght) {
        this.code = code;
        this.lenght = lenght;
    }

    getSummary(){
        return `Code: ${this.code}, Lenght: ${this.lenght}`;
    }
}

class MutatedSequence extends Sequence {
    constructor(code, lenght, mutationType) {
        super(code, lenght);
        this.mutationType = mutationType;
    }

    getSummary(){
        return `${super.getSummary()}, Mutation Type: ${this.mutationType}`;
    }

    static filterByLength(arr, min) {
    return arr.filter(seq => seq.length > min);
    }

}