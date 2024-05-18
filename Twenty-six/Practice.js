// Project summary function
function projectSummary() {
    // A map is created to store the projects
    let map = new Map();
    // A set is created to store project statuses
    let set = new Set();

    return {
        // Method that adds a project to the project list
        addProject: function (project, status) {
            // Check if the project already exists on the map
            if (map.has(project.toLowerCase())) {
                // Retrieves the assembly associated with the project
                set = map.get(project.toLowerCase());
                // Add the new statuses to the set
                for (let i = 0; i < status.length; i++) {
                    set.add(status[i]);
                }
                // Update the map with the updated set
                map.set(project.toLowerCase(), set);
            } else {
                // Create a new empty assembly if the project does not exist
                set = new Set();
                // Add the statuses to the set
                for (let i = 0; i < status.length; i++) {
                    set.add(status[i]);
                }
                // Adds the assembly to the map with the project name in lowercase
                map.set(project.toLowerCase(), set);
            }
        },

        // Method that prints the projects and their status
        printProjects: function () {
            // Returns the full map
            return map;
        }
    }
}


let projects = projectSummary();
projects.addProject('Project 1', ['Done']);
projects.addProject('Project 2', ['In progress']);
projects.addProject('Project 3', ['In progress']);
projects.addProject('Project 4', ['Not done']);

console.log(projects.printProjects());
// Map(4) {
//     'project 1' => Set(1) { 'Done' },
//     'project 2' => Set(1) { 'In progress' },
//     'project 3' => Set(1) { 'In progress' },
//     'project 4' => Set(1) { 'Not done' }
// }