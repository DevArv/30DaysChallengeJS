const studentsName = [
    {name: "Pedro", grades: [90, 87, 88, 90]},
    {name: "Jose", grades: [99, 71, 88, 96]},
    {name: "Maria", grades: [92, 81, 80, 96]},
];

function getStudentAverage(studentName) {
    if (!studentName) {
        // Calcular el promedio global de todos los estudiantes
        const totalGrades = studentsName.reduce((total, student) => {
            return total + student.grades.reduce((sum, grade) => sum + grade, 0);
        }, 0);
        const totalStudents = studentsName.reduce((total, student) => total + student.grades.length, 0);
        const globalAverage = totalGrades / totalStudents;
        return globalAverage;
    } else {
        // Calcular el promedio de un estudiante específico
        const student = studentsName.find(student => student.name === studentName);
        if (!student) {
            console.log("Student not found");
        } else {
            const average = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;
            return average;
        }
    }
}

// Calcular el promedio de un estudiante específico
console.log(getStudentAverage("Maria"));
console.log(getStudentAverage("Jose"));
console.log(getStudentAverage("Pedro"));

// Calcular el promedio global de todos los estudiantes
console.log(getStudentAverage());
