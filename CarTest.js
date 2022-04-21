let assert = require("assert");
let Car = require("./Car.js")

    describe("Constructor Tests", function(){
    
        it("Odometer test", function(){
            let c1 = new Car(1, 10, 30);
            let expectedOdometer = 0;
            let actualOdometer = c1.odometer;
            assert.equal(actualOdometer, expectedOdometer, "expecting odometer to be 0 on new instances of car");
        })
    
        it("initial inputs", function(){
            let c1 = new Car (1, 10, 30);
            assert.equal(c1.id, 1, "the id is not set correctly");
            assert.equal(c1.fuelCapacity, 10, "the fuel capacity is not set correctly");
            assert.equal(c1.efficency, 30, "the mpg is not set correctly");
        })
    
    
    })

    describe("Suite2", function(){

        it("add fuel", function(){
            let c = new Car (1, 10, 30);
            assert.equal(c.fuel, 0, "Car should start with 0 fuel");

            c.addFuel(5);
            assert.equal(c.fuel, 5, "expecting fuel to be 5");

            caddFuel(2);
            assert.equal(c.fuel, 7, "expecting fuel to be 7");

        })

        it("handle overflow", function(){
            let c = new Car (1, 10, 30);
            c.addFuel(20);

            assert.equal(c.fuel, 10, "Cannot over fill the car");
        })

        it("handle negative fuel", function(){
            let c = new Car (1, 10, 30);
            c.addFuel(5);
            c.addFuel(-3);
            assert.equal(c.fuel, 2, "allow siphoning");

            c.addFuel(-3);
            assert.equal(c.fuel, 0, "cannot take out gas you do not have")
        })
    })
    