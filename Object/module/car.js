class Car {
    drive() {
        console.log("I am Driving...")
    }
}

function fillGas() {
    console.log("Filling Gas...")
}
function fillAir() {
    console.log("Filling Air...")
}
export default Car
export {fillAir, fillGas}

// or we can provide before the class and func names