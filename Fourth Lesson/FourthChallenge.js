//First Challenge of the fourth day

// En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

// Recibirás un array de objetos que incluirán las siguientes propiedades:

// name: nombre del gatito.
// followers: un array de números, donde cada uno representa los seguidores de cada red social.
// Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. 
//Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, 
//manteniendo el orden en el que aparecen en el array de entrada.

// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: findFamousCats([
//   {
//     name: "Luna",
//     followers: [500, 200, 300]
//   },
//   {
//     name: "Michi",
//     followers: [100, 300]
//   },
// ])

// Output: ["Luna"]

// Ejemplo 2:

// Input: findFamousCats([
//   {
//     name: "Mimi",
//     followers: [320, 120, 70]
//   },
//   {
//     name: "Milo",
//     followers: [400, 300, 100, 200]
//   },
//   {
//     name: "Gizmo",
//     followers: [250, 750]
//   }
// ])

// Output: ["Milo", "Gizmo"]

function findFamousCats(cats) {
    let maxFollower = 0;
    let famousCat = null;

    for (const cat of cats) {
        // Calculate the total of followers for each cat
        const totalFollower = cat.followers.reduce((total, current) => total + current, 0);

        //Compare if the actual cat has more followers than the max that have been found
        if (totalFollower > maxFollower) {
            maxFollower = totalFollower; // update the max follower
            famousCat = cat; // update the famous cat
        }
    }
    return famousCat;
}

const cats = [
    { name: "Salem", followers: [102, 301, 700] },
    { name: "Sunshine", followers: [230, 180, 420] },
    { name: "Snow", followers: [20, 50, 190] }
];

const catWithMostFollowers = findFamousCats(cats);

if (catWithMostFollowers){
console.log(`The cat with most followers is: ${catWithMostFollowers.name}`);
} else {
    console.log(`Cat not found`);
}