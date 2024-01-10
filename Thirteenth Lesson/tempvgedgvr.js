function searchValue(array, value) {
    for (let row = 0; row < array.length; row++) {
        for (let column = 0; array[row].length; column++) {
            if (array[row][column] === value) {
                return {
                    row: row,
                    column: column
                }
            }
        }
    }
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
  
const value = 5

try {
    const result = searchValue(array, value);
    console.log(result);
} catch (error) {
    console.error(error.message);
}

console.log(searchValue(array, value));