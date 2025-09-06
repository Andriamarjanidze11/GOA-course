class Satellite {
    constructor(id, orbitType) {
    this.id = id;
    this.orbitType = orbitType;
    }

    getDetails() {
    return `ID: ${this.id}, Orbit Type: ${this.orbitType}`;
    }
}

class MilitarySatellite extends Satellite {
    constructor(id, orbitType, encryptionLevel) {
    super(id, orbitType);
    this.encryptionLevel = encryptionLevel;
    }

    getDetails() {
    return `${super.getDetails()}, Encryption Level: ${this.encryptionLevel}`;
    }

    static countByOrbit(arr, type) {
    return arr.filter(sat => sat.orbitType === type).length;
    }
}