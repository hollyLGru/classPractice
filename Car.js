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
        // this is not going to pass our tests...
        // add your code to make it work
        this.fuel += gallons;
    
        if(this.fuel > this.fuelCapacity){
            this.fuel = this.fuelCapacity;
        }
        if(this.fuel < 0 ){
            this.fuel = 0;
        } 
    
    if (this.fuel < 0) {
        this.fuel = 0 
    }
    }



// this method returns the maximum number of miles the car can go given its current fuel level
    getDrivingDistance(){
    return this.fuel * this.efficency;
    }
    

    drive(miles){

        if(miles <= 0) {
            return "Because we cannot go without fuel";
        }
        let maxMiles = this.getDrivingDistance();
        if(miles > maxMiles) {
            miles = maxMiles
        }

        this.odometer += miles;
        let fuelUsed = miles / this.efficency;
        this.fuel -= fuelUsed;



        
    
    }
}


module.exports = Car;


