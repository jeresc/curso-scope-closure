// Var
var firstName;              // Declaracion (Undefined)
firstName = 'Oscar';        // Asignacion
console.log(firstName);

var lastName = "David";     // Declarar / Asignar
lastName = "Jeremias";      // Reasignar
console.log(lastName);

var secondName = "Tomas";   // Declarando / Asignando
var secondName = "Ana";     // Reasignando
console.log(secondName)

// Let
let fruit = 'Apple';        // Declarando / Asignando
fruit = 'Kiwi';             // Reasignar
console.log(fruit);

// let fruit = 'Banana'; -> NO SE PUEDE RE-DECLARAR CON let

// Const
const animal = 'Dog';       // Declarando / Asignando
// animal = 'Cat' -> NO SE PUEDE RE-ASIGNAR NI RE-DECLARAR CON const
console.log(animal)

const vehicles = [];
// const es INMUTABLE, sin embargo deja usar los metodos sobre arreglos / objetos que pasan por referencia
vehicles.push('🏎️')
console.log(vehicles)

vehicles.pop()
console.log(vehicles)