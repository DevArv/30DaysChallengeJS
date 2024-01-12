// Mutable function
// push()
function addAnimal(array, animal) {
    return array.push(animal);
}

let animalArray = ['Dog', 'Bird', 'Cow'];
addAnimal(animalArray, 'Lion');
console.log(animalArray); // [ 'Dog', 'Bird', 'Cow', 'Lion' ]

function addSocialMedia(array, socialMedia) {
    return array.push(socialMedia);
}

let socialMediaArray = ['X', 'Instagram'];
addSocialMedia(socialMediaArray, 'Facebook');
console.log(socialMediaArray); // [ 'X', 'Instagram', 'Facebook' ]

// pop()
function removeAnimal(array) {
    return array.pop();
}

let removedItem = removeAnimal(animalArray);
console.log(removedItem); // Lion

function removeSocialMedia(array) {
    return array.pop();
}

let removedSocial = removeSocialMedia(socialMediaArray);
console.log(removedSocial); // Facebook

// shift()
function removeFirstAnimal(array) {
    return array.shift();
}

let removedAnimal = removeFirstAnimal(animalArray);
console.log(removedAnimal); // Dog

function removeFirstSocialMedia(array) {
    return array.shift();
}

let removedSocialMedia = removeFirstSocialMedia(socialMediaArray);
console.log(removedSocialMedia); // X

// unshift()
function addFirstAnimal(array, newAnimal) {
    return array.unshift(newAnimal);
}

addFirstAnimal(animalArray, 'Snake');
console.log(animalArray); // [ 'Snake', 'Dog', 'Bird', 'Cow' ]

function addFirstSocialMedia(array, newSocial) {
    return array.unshift(newSocial);
}

addFirstAnimal(socialMediaArray, 'WhatsApp');
console.log(socialMediaArray); // [ 'WhatsApp', 'X', 'Instagram' ]

// splice()
function modifyLevels(array, index, quantity, ... newElements) {
    array.splice(index, quantity, ...newElements);
}

let level = [1, 3, 5, 7, 9];
modifyLevels(level, 1, 2, 6, 8);
console.log(level); // [ 1, 6, 8, 7, 9 ]

function modifyAge(array, index, quantity, ...newAge) {
    array.splice(index, quantity, ...newAge);
}

let age = [8, 9, 10, 11, 12];
modifyAge(age, 0, 3, 6, 7);
console.log(age); // [ 6, 7, 11, 12 ]

// assign()
function combineAge(mainDestiny, ... additionaldestiny) {
    Object.assign(mainDestiny, ...additionaldestiny);
}

let objectAgeOne = { a: 6, b: 7 };
let objectAgeTwo = { c: 11, d: 12 };
combineAge(objectAgeOne, objectAgeTwo);

console.log(objectAgeOne); // { a: 6, b: 7, c: 11, d: 12 }

// push()
let color = ['Yellow', 'Red'];
color.push('Blue');
console.log(color); // [ 'Yellow', 'Red', 'Blue' ]

let anime = ['One Piece', 'Attack on Titan'];
anime.push('Naruto');
console.log(anime); // [ 'One Piece', 'Attack on Titan', 'Naruto' ]

// Mutable function can modify objects
const CHAMPION = {
    name: 'Lux',
    level: 12
};

function addProperty(object, key, value) {
    object[key] = value;
}

addProperty(CHAMPION, 'Master', 7);
console.log(CHAMPION); // { name: 'Lux', level: 12, Master: 7 }

// Mutable function can modify objects #2
const VIDEO_CARD = {
    brand: 'Nvidia',
    edition: 'GTX 1070'
}

function addInfo(object, key, value) {
    object[key] = value;
}

addInfo(VIDEO_CARD, 'Memory', '8GB');
console.log(VIDEO_CARD); // { brand: 'Nvidia', edition: 'GTX 1070', Memory: '8GB' }

// Mutable function can modify many objects in combination with loops

const MID_CHAMPION = [
    { champion: 'Lux', level: 8},
    { champion: 'Talon', level: 7},
];

const JUNGLER_CHAMPION = [
    { champion: 'Shaco', level: 6},
    { champion: 'Lilia', level: 5},
];

function addLevel(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].level++;
    }
}

addLevel(MID_CHAMPION, JUNGLER_CHAMPION);
console.log(MID_CHAMPION, JUNGLER_CHAMPION); // [ { champion: 'Lux', level: 9 }, { champion: 'Talon', level: 8 } ] [ { champion: 'Shaco', level: 6 }, { champion: 'Lilia', level: 5 } ]