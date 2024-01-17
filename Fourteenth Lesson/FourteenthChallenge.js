// Challenge #1
/* En este desafío tendrás que procesar una lista de compras.

Deberás implementar la lógica de la función processShoppingList de tal manera que esta módifique el array original de la siguiente manera

Si el nombre del producto incluye la palabra "oferta", se debe aplicar un descuento del 20% al precio del producto.
Multiplicar el precio del producto por su cantidad
Eliminar el atributo quantity una vez hecho lo anterior.
Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.

Ejemplo 1

Input:
const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)

Output: 89

Ejemplo 2

Input:
const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]

processShoppingList(shoppingList)

console.log(shoppingList)

// El array original debe ser modificado

Output:
[
  { name: "pan", price: 40 },
  { name: "leche", price: 25 },
  { name: "oferta manzanas", price: 24 },
] */

function processShoppingList(list) {
    // Itera sobre cada producto en la lista
    list.forEach(product => {
        // Verifica si el nombre del producto incluye la palabra "oferta"
        if (product.name.includes("oferta")) {
            // Si es una oferta, aplica un descuento del 20% al precio
            product.price = product.price * 0.8;
        }
        
        // Multiplica el precio por la cantidad de productos y actualiza el precio
        product.price = product.price * product.quantity;
        
        // Elimina la propiedad 'quantity' del producto
        delete product.quantity;
    });

    // Calcula el total sumando los precios de todos los productos en la lista
    const total = list.reduce((total, product) => total + product.price, 0);
    
    // Devuelve el total de la compra
    return total;
}

/*
const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
];

const result = processShoppingList(shoppingList);
console.log(result); // Output: 89

console.log(shoppingList);

Output:
[
    { name: 'pan', price: 40 },
    { name: 'leche', price: 25 },
    { name: 'oferta manzanas', price: 24 }
] */

// Challenge #2
/*En este desafío, tendrás que ordenar una lista de productos.

Tu tarea es implementar la lógica de la función sortByAvailabilityAndPrice. 
Esta función recibirá un array de objetos que representan productos, 
y devolverá una copia ordenada de dicho array.

El ordenamiento se realizará siguiendo dos criterios:

Primero, los productos disponibles en inventario serán colocados al principio de la lista.
Luego, los productos serán ordenados por su precio, de manera ascendente.
Es importante destacar que la lista original no sufrirá ninguna modificación 
y que la función devolverá una nueva lista con los cambios mencionados.

Ejemplo

Input:

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
]

sortByAvailabilityAndPrice(products)

Output:
[
  { name: "product1", price: 10, inStock: true },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
  { name: "product2", price: 20, inStock: false },
] */

function sortByAvailabilityAndPrice(products) {
}