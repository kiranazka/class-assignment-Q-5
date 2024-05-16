
// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

function calculator(var1:number , var2:number , operator: "+") 
{
  if (operator === "+") {
    return var1 + var2;
  } 
  else if (operator === "-") {
    return var1 - var2;

  } 
  else if (operator === "*") {
    return var1 * var2;
  } 
  else if (operator === "/") {
    return var1 / var2;
  }

}
console.log(calculator(19, 25, "+"));

