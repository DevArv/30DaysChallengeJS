// En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, 
//así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner 
//para que devuelva los siguientes métodos:

// addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. 
//La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso 
//al momento de agregar una tarea.
// removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
// getTasks(): Devuelve el array de tareas.
// getPendingTasks(): Devuelve solo las tareas pendientes.
// getCompletedTasks(): Devuelve solo las tareas completadas.
// markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
// getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), 
//sin modificar la lista de tareas original.
// filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
// updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
// Ejemplo 1:

// Input:
// const planner = createTaskPlanner();

// planner.addTask({
//     id: 1,
//     name: "Comprar leche",
//     priority: 1,
//     tags: ["shopping", "home"]
// });


// planner.addTask({
//     id: 2,
//     name: "Llamar a Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// planner.markTaskAsCompleted("Llamar a Juan")

// Output:
// planner.getCompletedTasks()
// [{
//     id: 2,
//     name: "Llamar a Juan",
//     completed: true,
//     priority: 3,
//     tags: ["personal"]
// }]

// Ejemplo 2:

// Input:
// const planner = createTaskPlanner();

// planner.addTask({
//     id: 1,
//     name: "Comprar leche",
//     priority: 1,
//     tags: ["shopping", "home"]
// });

// planner.addTask({
//     id: 2,
//     name: "Llamar a Juan",
//     priority: 3,
//     tags: ["personal"]
// });

// Output:
// planner.filterTasksByTag("shopping")
// [{
//     id: 1,
//     name: "Comprar leche",
//     completed: false,
//     priority: 3,
//     tags: ["shopping", "home"]
// }]

// Function to create a task planner object
function createTaskPlanner() {
    // Array to store tasks
    let tasks = [];

    // Object with task planner methods
    return {
        // Method to add a task to the planner
        addTask(task) {
            // Set default value for task completion if not provided
            task.completed = task.completed !== undefined ? task.completed : false;
            // Add the task to the tasks array
            tasks.push(task);
        },

        // Method to remove a task by id or name
        removeTask(value) {
            // Filter tasks to remove the specified task by id or name
            tasks = tasks.filter(task => task.id !== value && task.name !== value);
        },

        // Method to get all tasks
        getTasks() {
            return tasks;
        },

        // Method to get pending tasks (tasks not completed)
        getPendingTasks() {
            return tasks.filter(task => task.completed === false);
        },

        // Method to get completed tasks
        getCompletedTasks() {
            return tasks.filter(task => task.completed === true);
        },

        // Method to mark a task as completed by id or name
        markTaskAsCompleted(value) {
            tasks.forEach(task => {
                if (task.id === value || task.name === value) {
                    task.completed = true;
                }
            });
        },

        // Method to get tasks sorted by priority
        getSortedTasksByPriority() {
            // Create a copy of tasks and sort by priority
            return tasks.slice().sort((a, b) => a.priority - b.priority);
        },

        // Method to filter tasks by tag
        filterTasksByTag(tag) {
            return tasks.filter(task => task.tags.includes(tag));
        },

        // Method to update a task by id with provided updates
        updateTask(taskId, updates) {
            tasks.forEach(task => {
                if (task.id === taskId) {
                    // Update task properties with provided updates
                    Object.assign(task, updates);
                }
            });
        }
    };
};


let planner = new createTaskPlanner();
planner.addTask({
    id: 1,
    name: "I need to send an Email to my work teamates",
    priority: 3,
    tags: ["work"],
    completed: false
}),
planner.addTask(
{
    id: 2,
    name: "Meeting with a customer",
    priority: 1,
    tags: ["meeting"],
    completed: false
}),
planner.addTask({
    id: 3,
    name: "New upgrade to my To do app",
    priority: 3,
    tags: ["upgrade"],
    completed: true
});

// console.log(planner.removeTask());
// console.log(planner.getPendingTasks());
// console.log(planner.getCompletedTasks());
// console.log(planner.markTaskAsCompleted(1));
// console.log(planner.filterTasksByTag("work"));
// console.log(planner.getTasks());
// console.log(planner.getSortedTasksByPriority());
// console.log(planner.updateTask(3, { priority: 1}));
// console.log(planner.getTasks());