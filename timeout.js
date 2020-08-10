function doSomething (){
  console.log(3333);
}
console.log(2222);
console.log(2222);
setTimeout(doSomething, 4000);
console.log(2222);
console.log(2222);
console.log(2222);
setTimeout(function(){
  console.log('see you later.');
},5000)
console.log(2222);
setTimeout(()=>{
  console.log('I come After all');
},6000)
console.log(2222);

setInterval(() => {
  console.log('doing it.');
}, 5000);