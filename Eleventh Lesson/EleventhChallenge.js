// //Eleventh Challenge

// En este desafío debes utilizar promesas para enviar un correo electrónico.

// La función sendEmail recibe tres parámetros: email, subject y body, 
//los cuales son necesarios para enviar un correo. Deberás implementar la lógica necesaria para usar 
//promesas y enviar el correo después de 2 segundos.

// En caso de faltar algún dato, deberás lanzar un error con el mensaje indicando que faltan campos 
//para enviar el correo. Recuerda utilizar la siguiente sintaxis:

// reject(new Error(message));

// También recuerda que para usar setInterval o setTimeout debes usar el namespace de window de la 
//siguiente manera para que las pruebas pasen correctamente.

// window.setTimeout(() => {
//   // Código aquí
// }, 1000);

// Ejemplo 1:

// Input:

// sendEmail(
//   "test@mail.com",
//   "Nuevo reto",
//   "Únete a los 30 días de JS"
// )
// .then(result => console.log(result))


// Output:

// // Después de 2 segundos

// {
//   email: "test@mail.com"
//   subject: "Nuevo reto",
//   body:  "Únete a los 30 días de JS",
// }

// Ejemplo 2:

// Input:

// sendEmail(
//   "test@mail.com",
//   "",
//   "Únete a los 30 días de JS"
// )
// .then(result => console.log(result))
// .catch(error => console.log(error))

// Output:

// // Después de 2 segundos

// "Error: Hacen falta campos para enviar el email"

//Function with a promise to send an Email.
function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email && subject && body) {
                resolve({ email, subject, body });
            } else {
                const MISSING_DETAILS = [];
                
                if(!email) MISSING_DETAILS.push('email');
                if(!subject) MISSING_DETAILS.push('subject');
                if(!body) MISSING_DETAILS.push('body');

                const ERROR_MESSAGE = `Error: Hacen falta campos para enviar el email: ${MISSING_DETAILS.join(', ')}`;
                reject(new Error(ERROR_MESSAGE));
            }
        }, 2000);
    });
}

sendEmail("Hi, good luck with this challenge", "You can do it!")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error.message);
})

// En este desafío tienes un código base el cual se aplica una mala práctica de programación 
//que conocemos como el callback hell y tu reto es evitarlo usando promesas.

// Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.

// Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada 
//que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones 
//que tienes que ejecutar.

// Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y 
//deberías pasar las funciones del archivo tasks.js a promesas.

// Ejemplo:

// Input:
// runCode()
// .then(response => console.log(response));

// Output:
// ["Task 1", "Task 2", "Task 3"]

//import { doTask1, doTask2, doTask3 } from './tasks';

// export function runCode() {
//   const strings = [];
//   return new Promise((resolve) => {
//     doTask1((rta1) => {
//       strings.push(rta1);
//       doTask2((rta2) => {
//         strings.push(rta2);
//         doTask3((rta3) => {
//           strings.push(rta3);
//           resolve(strings);
//         })
//       })
//     })
//   })
// }


import { doTask1, doTask2, doTask3 } from './TasksChallenge.js';
function runCode() {
    const strings = [];
  
    return doTask1()
        .then(resultTask1 => {
        strings.push(resultTask1);
        return doTask2();
    })
    .then(resultTask2 => {
        strings.push(resultTask2);
        return doTask3();
    })
    .then(resultTask3 => {
        strings.push(resultTask3);
        return strings;
    })
}

runCode()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
