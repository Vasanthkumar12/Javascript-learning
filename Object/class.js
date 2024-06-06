// 1.1 Class
class User {
    // Constructor -> Used to Initializing the object
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    login() {
        console.log("Yes you are logged in")
    }
    logout() {
        console.log("Yes you are logged out")
    }
}

let user1 = new User('John', 23)
let user2 = new User('Peter', 24)
console.log(user1)
console.log(user1.name)
console.log(user1.age)
console.log(user2)

// 1.2 Inheritance
class PaidUser extends User {
    constructor(name, age) {
        /* this.name = name
           this.age = age */ // We cannot give like this when a class extends from parent. So what can we do means we we must delegate to parent for the Initialization
        super(name, age) // we must delegate to parent for the Initialization
        this.storage = "100GB" // we can also add extra variables inside the child class constructor
    }
    message() {
        console.log("This is a Subclass method")
    }
}
let paidUser1 = new PaidUser("Rooth", 45)
console.log(paidUser1)
console.log(paidUser1.name)
console.log(paidUser1.age)
user1.login()
user2.logout()
paidUser1.login()
paidUser1.message()
// console.log(user1.message())


// 2. Get and Set methods -> for every instance variable we can define the getter and setter methods
class Car {
    constructor(name, number) {
        this._name = name // _name is a Private variable
        this._number = number
    }
    get name(){
        // return this._name
        return `name = ${this._name}`
    }
    set name(name){
        this._name = name
    }
    get number(){
        return this._number
    }
    set number(number){
        this._number = number
    }
}

let audi = new Car('Audi', 2787)
console.log(audi)
console.log("audi.name =", audi.name)
console.log("audi._name =", audi._name) // This is not recommended becoz Even though Private variable is accessed from outside of the class
console.log("audi.number =", audi.number)
console.log("audi._number =", audi._number)
