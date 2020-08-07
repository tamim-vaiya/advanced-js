let bonus = 20;

function sum (first, second){
  let result = first + second + bonus;
  console.log(bonus);
  return result;
}

const output = sum (3, 7);
console.log(output);
console.log(bonus);

/* Scoping is determining where variables, functions, and objects are accessible in your code during runtime. This means the scope of a variable(where it can be accessed) is controlled by the location of the variable declaration. In Javascript, there are two scopes: Global Scope.

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

need to learn: hosting , block scope, global scope;

***** thatjsdude.com *****
*/