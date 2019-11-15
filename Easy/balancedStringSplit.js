/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  //As soon as we see a L | R, start counting until the reciprocal reaches the same count. then just reset L and R
  //Start count at 1 as we know we have a valid string already, so we at least have one.
  // Initialize L and R counts to 0
  let count = 1,
    L = 0,
    R = 0;
  //Go though the string, check if we found a shortest combination
  for (let ch of s) check(L, R);
  //Count up until the next one occurs
  if (ch == "L") {
    L++;
  } else {
    R++;
  }
};
return count;

//Let's make a check function to keep out if statements clean up there
//You could have done this in the iterating above, if you wanted to
function check(L, R) {
  //As long as we have a current L and R that is not at zero
  if (L != 0 && R != 0) {
    //If the counts are equal, we found a new valid string
    if (L == R) {
      count++;
      //Reset L and R
      L = R = 0;
    }
  }
}
