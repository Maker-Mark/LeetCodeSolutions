/*
The given constraints about the input of this problem makes using a stack an intuitive approach, with few edge cases!
Start/Input: String with strictly open and closing parenthesis
Goal/Out: Record the number of non-paired parenthesis
Plan: Make a stack that will hold any unmatched parenthesis
    -> IF the first element in the stack (the .peek() in java/conventional stack) is an opening and the next character is        a closing parenthesis, we can pop the current top, and disregard the closing one we are looking at
          If they don't complement each other, we add it!
       ELSE
       Push it to the stack
    Once we are done the stack contains all the parenthesis that are missing their complement.
     All that is left to do is return how many are still there so we return the size of the stack

*/
var minAddToMakeValid = function(S) {
  let stk = [];
  let cArr = S.split(""); //Turn the string into a char array
  for (let ch = 0; ch < cArr.length; ch++) {
    //If we have something in our stack to compare to...
    if (stk.length > 0) {
      if (stk[stk.length - 1] == "(" && cArr[ch] == ")") {
        stk.pop(); // They complement each other so pop and disregard
      } else {
        stk.push(cArr[ch]);
      }
    } else {
      stk.push(cArr[ch]);
    }
  }
  return stk.length;
};
