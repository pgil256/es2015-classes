class Vehicle {
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        return "This vehicle is a ${this.make}  ${this.model} from ${this.year}";
    }
}

class Car extends Vehicle {
    constructor(make,model,year,numWheels){
        super(make,model,year);
        this.numWheels=numWheels=4;
    }
}

class Motorycycle extends Vehicle {
    constructor(make,model,year,numWheels){
        super(make,model,year);
        this.numWheels=numWheels=4;
    }
    revEngine(){
        return"VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        this.vehicles= [];
        this.capacity=capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        } if (this.vehicles.length===this.capacity){
            return "Sorry, we're full!"
        } 
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}