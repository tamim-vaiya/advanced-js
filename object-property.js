const students = [
  {id: 21 , name:'Omar Sunny'},
  {id: 31 , name:'Manna'},
  {id: 41 , name:'Moyouri'},
  {id: 51 , name:'Deepjol'}
];

const names = students.map(s => s.name);
const ids = students.map ( s => s.id);
const bigger = students.filter( s => s.id > 40);
console.log(names, ids, bigger);