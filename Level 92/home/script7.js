class Vision {
    constructor(type, intensity) {
    this.type = type;
    this.intensity = intensity;
    }

    getSummary() {
        return `Type: ${this.type}, Intensity: ${this.intensity}`;
    }
}

class FutureVision extends Vision {
    constructor(type, intensity, timestamp) {
    super(type, intensity);
    this.timestamp = timestamp;
    }

    getSummary() {
        return `${super.getSummary()}, Timestamp: ${this.timestamp}`;
    }

    static filterByIntensity(arr, threshold) {
    return arr.filter(v => v.intensity >= threshold);
    }
}