/**
 * @param {character[][]} matrix
 * @return {number}
 */
// If i'm a 1, set the new value in the dp to be the minimum from the 3 other cells(left of me, left diag and above me) + 1. The m[row,col] now represents the
// largest square we could have there as that cell as the bottom right corner
// This works as if we continually ask if we are a possible piece of a square, and then just add the smallest part of a square that surrounds us so far, we now have the corner of a size x by x square.
/*
Input: 2d matrix with 1's and 0's denoting size of a square
Out/Goal: The maximal area of a square
Approach: We can use the fact that a square is of equal size, and treat each cell in the matrix[r,c] as the bottom left of a matrix
        If we are at m[0,0], if the value there is a 1, the maximal size is simply a 1
        Otherwise, if we are at a non bound, we can observe that if we look at the 3 other places that would make us a square, we can continually see how large the square can get. 
        We cannot overestimate this, so we use the minimum value of the three other cells around us to add and update our value if we are a 1!
        In general, we can formulate the updated value for each m[r,c] to be:
        if(m[r,c] == 1) 
        min(m[r,c-1] (left of me), m[r-1,c-1] (left diag), m[r-1,c]) + 1
*/

var maximalSquare = function(m) {
  //Edge case: Empty
  if (m.length == 0) return 0;
  //Edge case: Just one row
  if (m.length == 1) {
    for (let i = 0; i < m[0].length; i++) {
      // Go through the cells and return 1 as soon as one of them is a 1
      if (m[0][i] == 1) return 1;
    }
    return 0;
  }
  //Edge case:Just one column
  if (m[0].length == 1) {
    // Go through the cells and return 1 as soon as one of them is a 1
    for (let i = 0; i < m.length; i++) {
      if (m[i][0] == 1) return 1;
    }
    return 0;
  }
  //Keep track of the highest cell value and return it times it's self( "square" it ;)
  //Go though the matrix and use it as a dynamic programming table
  let max = Number.MIN_VALUE;
  for (let row = 0; row < m.length; row++) {
    for (let col = 0; col < m[0].length; col++) {
      if (row == 0 || col == 0) {
        max = Math.max(m[row][col], max);
      } else {
        if (m[row][col] > 0) {
          m[row][col] =
            1 + Math.min(m[row][col - 1], m[row - 1][col - 1], m[row - 1][col]);
          max = Math.max(m[row][col], max);
        }
      }
    }
  }
  return max * max;
};
