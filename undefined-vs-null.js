//diff ways to find undefined and null
// way - 1
let pakhi;
console.log(pakhi);
// way - 2
function add (num1, num2){
  console.log(num1 + num2);
}

const result = add(13, 15);
console.log(result);
// way - 3
function add (num1, num2){
  console.log(num1 + num2);
  return;
}

const result2 = add(13, 15);
console.log(result2);
// way - 4
function add (num1, num2){
  console.log(num1 , num2);
}

const result3 = add(13);
console.log(result3);
// way - 5
const premik = {name:'samsu', phone:534554};
console.log(premik.gf);
// way - 6
let fun = undefined;
console.log(fun);
// way - 7
let ages = [2, 5, 7];
console.log(ages[11]);