class Piece {
    constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    }

    getInfo() {
        return `Shape: ${this.shape}, Color: ${this.color}`;
    }
}

class RarePiece extends Piece {
    constructor(shape, color, rarityScore) {
    super(shape, color);
    this.rarityScore = rarityScore;
    }

    getInfo() {
    return `${super.getInfo()}, Rarity Score: ${this.rarityScore}`;
    }

    static rarest(arr) {
    return arr.reduce((max, piece) =>
        piece.rarityScore > max.rarityScore ? piece : max
    );
     }
}