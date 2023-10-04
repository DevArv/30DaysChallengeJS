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
    let influencerCats = {
        kittyNames: [],
        maxFollowers: 0,
    };

    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];

        const totalFollowers = cat.followers.reduce(
            (total, current) => total + current, 0);

        if (totalFollowers === influencerCats.maxFollowers) {
        influencerCats.kittyNames.push(cat.name);
        }

        if (totalFollowers > influencerCats.maxFollowers) {
        influencerCats.maxFollowers = totalFollowers;
        influencerCats.kittyNames = [];
        influencerCats.kittyNames.push(cat.name);
        }
    }
    return influencerCats.kittyNames;
}

//Second Challenge of the fourth day

//En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

// Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

// name: El nombre del estudiante
// grades: Las notas de cada materia del estudiante
// A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage 
//con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

// Es importante mencionar que los promedios deben ser calculados con precisión y 
//se deben redondear a dos decimales para que los test pasen sin problema alguno. 
//Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇

// const number = 100.32433;
// number.toFixed(2); // "100.32"

// 👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.

// Ejemplo:

// Input: getStudentAverage([
//   {
//     name: "Pedro",
//     grades: [90, 87, 88, 90],
//   },
//   {
//     name: "Jose",
//     grades: [99, 71, 88, 96],
//   },
//   {
//     name: "Maria",
//     grades: [92, 81, 80, 96],
//   },
// ])

// Output: {
//   classAverage: 88.17,
//   students: [
//     {
//       name: "Pedro",
//       average: 88.75
//     },
//     {
//       name: "Jose",
//       average: 88.5
//     },
//     {
//       name: "Maria",
//       average: 87.25
//     }
//   ]
// }

// Definición de estudiantes con sus nombres y calificaciones
const students = [
    { name: "Alex", grades: [92, 88, 94, 82] },
    { name: "Maria", grades: [84, 90, 88, 97] },
];

// Función para calcular el promedio de calificaciones de los estudiantes
function getStudentAverage(students) {
    // Mapeo de cada estudiante a un objeto que contiene su nombre y promedio de calificaciones
    const studentsAndAverage = students.map((student) => {
        // Extracción de las calificaciones del estudiante actual
        const grades = student.grades;
        // Cálculo del promedio de calificaciones utilizando la función reduce
        const average = grades.reduce((total, grade) => total + grade, 0) / grades.length;
        // Creación de un objeto con el nombre del estudiante y su promedio, redondeado a dos decimales
        return {
            name: student.name,
            average: Number(average.toFixed(2)),
        };
    });

    // Cálculo del promedio de toda la clase usando la función reduce
    const classAverage = studentsAndAverage.reduce((total, student) => total + student.average, 0) / studentsAndAverage.length;
    
    // Creación de un objeto que contiene el promedio de la clase y la información individual de cada estudiante
    const globalAverage = {
        classAverage: Number(classAverage.toFixed(2)),
        students: studentsAndAverage,
    };

    // Devolución del objeto con el promedio global y los promedios individuales de los estudiantes
    return globalAverage;
}

// Impresión en consola del resultado de la función con los datos de los estudiantes declarados anteriormente
console.log(getStudentAverage(students));
