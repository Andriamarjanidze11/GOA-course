class Vechicle {
    constructor(model, speed) {
        this.id = this.id;
        this.model = model;
    }

    getInfo(){
        return `Model: ${this.model},Speed: ${this.speed}`;
    }
}

class ElectricVehicle extends Vehicle {
    constructor(model, speed, batteryLife) {
    super(model, speed);
    this.batteryLife = batteryLife;
    }

    getInfo() {
    return `${super.getInfo()}, Battery Life: ${this.batteryLife} hrs`;
    }

    static compareSpeed(v1, v2) {
    return v1.speed > v2.speed ? v1 : v2;
    }
}

