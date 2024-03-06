//Collaborators: Laraib Shaikh, JordyNtambwe, Lubi Islam

//You'll be implementing a function called transpose, which will receive an array of arrays as its only parameter. Your function must return a new array with the columns and rows switched. Note that we've included a printMatrix function, which nicely prints out your 2D arrays.

const transpose = function (matrix) {
  //assigning rows to the length of the matrix array rows
  const rows = matrix.length;
  //assigning columns to the length of the index 0 of matrix array
  const columns = matrix[0].length;
  //create a new array
  const newArray = [];

  //looping through the new transposed matrix
  for (let j = 0; j < columns; j++) {
    // assigning the columns of the new array to the row values of original matrix 
    newArray[j] = Array(rows);
  }
  // looping through the rows of original matrix
  for (let i = 0; i < rows; i++) {
  // looping through the columns of original matrix
    for (let j = 0; j < columns; j++) {
      //assigning the newArray columns,rows to original matrix rows,columns
      newArray[j][i] = matrix[i][j];
    }
  }
  return newArray;

// return matrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
for (const row of matrix) {
  for (const el of row) {
    process.stdout.write(el + " ");
  }
  process.stdout.write("\n");
}
};

printMatrix(
transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
])
);

console.log("----");

printMatrix(
transpose([
  [1, 2],
  [3, 4],
  [5, 6],
])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));