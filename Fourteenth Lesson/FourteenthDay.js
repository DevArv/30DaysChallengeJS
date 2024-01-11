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