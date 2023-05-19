// Variables

var a;          // Declarando
var b = 'b'     // Declaramos e inicializamos
b = 'bb'        // Re-inicializacion
var a = 'aa';   // Re-declaracion

// Global Scope
var fruit = 'Apple'; // Global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Colombia'; // Global
  console.log(country);
}

countries();
console.log(country)