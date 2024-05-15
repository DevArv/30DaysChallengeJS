/* eslint-disable no-unused-vars */
/* eslint-disable brace-style */
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

function processShoppingList (list) {
  // Itera sobre cada producto en la lista
  list.forEach(product => {
    // Verifica si el nombre del producto incluye la palabra "oferta"
    if (product.name.includes('oferta')) {
      // Si es una oferta, aplica un descuento del 20% al precio
      product.price = product.price * 0.8
    }

    // Multiplica el precio por la cantidad de productos y actualiza el precio
    product.price = product.price * product.quantity

    // Elimina la propiedad 'quantity' del producto
    delete product.quantity
  })

  // Calcula el total sumando los precios de todos los productos en la lista
  const total = list.reduce((total, product) => total + product.price, 0)

  // Devuelve el total de la compra
  return total
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
/* En este desafío, tendrás que ordenar una lista de productos.

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

// Function to sort an array of products based on availability and price
function sortByAvailabilityAndPrice (products) {
  // Create a copy of the original array to avoid modifying it directly
  const ARRAY_PRODUCTS = [...products]

  // Sort the copied array based on availability and then price
  ARRAY_PRODUCTS.sort((a, b) => {
    // If product 'a' is in stock and product 'b' is not, prioritize 'a'
    if (a.inStock && !b.inStock) {
      return -1
    }
    // If product 'b' is in stock and product 'a' is not, prioritize 'b'
    else if (!a.inStock && b.inStock) {
      return 1
    }
    // If both products are either in stock or not, prioritize based on price in ascending order
    else {
      return a.price - b.price
    }
  })

  // Return the sorted array without modifying the original one
  return ARRAY_PRODUCTS
}

const products = [
  { name: 'product1', price: 10, inStock: true },
  { name: 'product2', price: 20, inStock: false },
  { name: 'product3', price: 15, inStock: true },
  { name: 'product4', price: 5, inStock: false }
]

const ARRAY_PRODUCTS = sortByAvailabilityAndPrice(products)
console.log(ARRAY_PRODUCTS)

/*
[
  { name: 'product1', price: 10, inStock: true },
  { name: 'product3', price: 15, inStock: true },
  { name: 'product4', price: 5, inStock: false },
  { name: 'product2', price: 20, inStock: false }
]

This code defines a function called sortByAvailabilityAndPrice that takes an array of products as input and returns a new array with the products sorted based on availability and price.

The function creates a copy of the original array to avoid modifying it directly. It then uses the sort method to sort the copied array.

The sorting is done based on the following criteria:

If a product 'a' is in stock and product 'b' is not, 'a' is prioritized and comes before 'b' in the sorted array.
If product 'b' is in stock and product 'a' is not, 'b' is prioritized and comes before 'a' in the sorted array.
If both products are either in stock or not, they are prioritized based on price in ascending order.
The sorted array is returned without modifying the original one. */
