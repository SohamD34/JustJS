// CLASS -blueprint/template for creating objects.

class Car{

    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    get_brand(){
        console.log(this.brand);
    }
    get_model(){
        console.log(this.model);
    }
    get_year(){
        console.log(this.year);
    }
}

let fortuner = new Car("Toyota", "Fortuner", 2021);
fortuner.start();
fortuner.get_brand();
fortuner.get_model();
fortuner.get_year();
fortuner.stop();

let huracan = new Car("Lamborghini", "Huracan", 2021);
huracan.start();
huracan.get_brand();
huracan.get_model();
huracan.get_year();
huracan.stop();