const assert = require('assert');

class Car {
    id;
    odometer;
    fuelCapacity;
    efficency;

    constructor (id, fuelCapacity, efficency){
        this.id= id;
        this.odometer= 0;
        this.fuel = 0;
        this.efficency = efficency;
        this.fuelCapacity = fuelCapacity;
    }

    addFuel(gallons) {
        this.fuel = this.fuel + gallons; 
    }
}


module.exports = Car;


