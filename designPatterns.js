// Design Patterns Demo - Factory & Singleton

// Factory Pattern
function Car(model, color) {
    this.model = model;
    this.color = color;
}

function carFactory(model, color) {
    return new Car(model, color);
}

const myCar1 = carFactory('Toyota', 'Red');
const myCar2 = carFactory('Honda', 'Blue');

console.log(myCar1); // Car { model: 'Toyota', color: 'Red' }
console.log(myCar2); // Car { model: 'Honda', color: 'Blue' }

// Singleton Pattern
const Singleton = (function() {
    let instance;

    function createInstance() {
        return { name: 'Singleton Instance', createdAt: new Date() };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true (both are the same instance)
console.log(singleton1); // { name: 'Singleton Instance', createdAt: [current date] }
