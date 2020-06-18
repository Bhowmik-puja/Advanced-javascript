const students = [
    {id: 12,name: 'subir'},
    {id: 45,name: 'jarina'},
    {id: 46,name: 'karim'},
    {id: 75,name: 'rahim'}
]
//const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     names[i] = element.name;
// }
// console.log(names);

// const names = students.map( s => s.id.toExponential.name.anchor.name.);
// console.log(names);

const bigger = students.filter( s => s.id >40);
console.log(bigger);


const isThere = students.find( s => s.id >40);
console.log(isThere);