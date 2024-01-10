// En este desafío, tendrás la tarea de agrupar una lista de productos según su categoría.

// Para ello, debes implementar la lógica de la función groupProducts que recibirá dos parámetros: 
//products y category.

// El primer parámetro products es una lista de objetos que representan cada producto 
//y contienen las propiedades: name, category y price. 
//El segundo parámetro category específica a qué categoría se filtrarán los productos.

// La función debe retornar un objeto con dos propiedades: products que contiene la cadena de texto 
//con los nombres de los productos respetando el orden en el que llegan separados por comas, y 
//totalPrice que contiene la suma total de los precios.

// Ejemplo 1:

// Input:
// const products = [
//   { name: "Smartphone", category: "Electronics", price: 800 },
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Shirt", category: "Clothing", price: 50 },
//   { name: "Pants", category: "Clothing", price: 100 },
// ];

// groupProducts(products, "Electronics")

// Output: {
//   products: "Smartphone, Laptop",
//   totalPrice: 2000,
// }

// Ejemplo 2:

// Input:
// const products = [
//   { name: "Smartphone", category: "Electronics", price: 800 },
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Shirt", category: "Clothing", price: 50 },
//   { name: "Pants", category: "Clothing", price: 100 },
// ];

// groupProducts(products, "Clothing")

// Output: {
//   products: "Shirt, Pants",
//   totalPrice: 150,
// }

function groupProducts(products, category) {
    // Filter products based on the specified category, 
    //extract product names, and join them into a comma-separated string.
    const productNames = products
        .filter(product => product.category === category)
        .map(product => product.name)
        .join(", ");

    // Calculate the total price of products in the specified category using the reduce function.
    const totalPrice = products
        .filter(product => product.category === category)
        .reduce((total, product) => total + product.price, 0);

    // Return an object with the extracted product names and the total price.
    return {
        products: productNames,
        totalPrice: totalPrice
    };
}

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Electronics"));

/* En este desafío, tu objetivo es encontrar un valor específico en un array de dos dimensiones.

La función searchValue recibirá dos parámetros: un array bidimensional y un valor a buscar. 
Tu tarea será implementar la lógica necesaria para encontrar el valor y retornar un objeto con las propiedades 
row y column que indicarán la posición del valor dentro del array bidimensional.

Si el valor no se encuentra en la matriz, la función deberá lanzar un error con el mensaje "Valor no encontrado". 
Recuerda que la sintaxis para lanzar errores es la siguiente

throw new Error("Valor no encontrado");

Ejemplo 1:


Input:

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 5

searchValue(array, value)

Output:

{
  row: 1,
  column: 1,
}

Ejemplo 2:


Input:

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const value = 45;

Output: "Valor no encontrado" */

function searchValue(array, value) {
    for (let row = 0; row < array.length; row++) {
        for (let column = 0; column < array[row].length; column++) {
            if (array[row][column] === value) {
                return {
                    row: row,
                    column: column,
                }
            }
        }
    }
    throw new Error("Valor no encontrado");
}

try {
    const result = searchValue(array, value);
    console.log(result);
} catch (error) {
    console.error(error.message);
}