export function toDoNote() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('To Do Note'), 1000);
    })
}

export function ToDoProject() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('To Do Project'), 1000);
    })
}