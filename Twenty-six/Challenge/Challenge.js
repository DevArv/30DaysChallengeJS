/* En este desafío deberás remover los elementos duplicados de un array.

La función removeDuplicates recibirá un array con elementos que pueden ser números o strings 
y que contienen elementos repetidos. 
Tu objetivo es implementar la lógica necesaria para quitar estos elementos repetidos 
y mantener el orden original de aparición de los elementos en el array.

Ejemplo 1:

Input:

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits))

Output: ["melon", "mango", "banana", "apple"]

Ejemplo 2:

Input:

const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))

Output: [1, 2, 3] */

function removeDuplicates(values) {
    return [...new Set(values)];
}

const fruits = [
    "melon",
    "melon",
    "mango",
    "banana",
    "apple",
    "banana",
    "apple",
];

console.log(removeDuplicates(fruits));
// [ 'melon', 'mango', 'banana', 'apple' ]


// Practice based on the challenge

function cleanRoles(roles) {
    return [...new Set(roles)];
}

const ROLES = [
    "admin",
    "developer",
    "manager",
    "sales",
    "marketing",
    "support",
    "accountant",
    "HR",
    "QA",
    "UX",
    "developer",
    "manager",
    "sales",
    "marketing",
    "support",
    "accountant",
    "HR",
    "QA",
    "UX",
];

console.log(cleanRoles(ROLES));
/* Output: [
    'admin',      'developer',
    'manager',    'sales',
    'marketing',  'support',
    'accountant', 'HR',
    'QA',         'UX'
] */