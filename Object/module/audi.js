import Car, {fillGas, fillAir} from './car.js'
class Audi {
    message() {
        console.log("This is Audi car")
    }
}

let audi = new Car()
audi.drive()
fillGas()