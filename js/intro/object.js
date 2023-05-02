console.clear();
console.log('*****OBJECTS*****');

// MASYVU kurimas:
const students = ['Jonas', 'Petras', 'Maryte'];
// Masyvo nariu pasiekimas:
console.log(students[0]);

// Iteravimas per masyva: ciklais
for (let i = 0; i < students.length; i++) {
   console.log("For ciklas: " + students[i]);
}

// map ciklas:
students.map(student => {
   console.log('Map ciklas: ' + student);
})

// forEach ciklas:
students.forEach(student => {
   console.log('forEach ciklas: ' + student);
})

// do... while:
let m = 0;
do {
   console.log('Do-while ciklas: ' + students[m]);
   m++
} while (m < students.length)

// for...of ciklas:
for (let student of students) {
   console.log('for.. of: ' + student);
}

console.clear();
const student1Arr = ['Jonas', 'Petraitis', 25, 'Vilnius', 'FEU7'];

/*
Objekto sintakse:
const obj = {
   key: 'value', //key: value pora vadinama property
}
*/

const student1Obj = {
   name: 'Jonas',
   'last Name': 'Petraitis',
   age: 25,
   city: 'Vilnius',
   group: 'FEU7',
}

console.log(student1Obj);

console.log(student1Obj.name);
console.log(student1Obj['last Name']);

// Objekto propertys pakeitimas:
console.log(student1Obj.age);
student1Obj.age = 30; // arba student1Obj['age'] = 30;
console.log(student1Obj.age);

// Pirmiausiai pasiekiame - tada pakeiciame

// Objekto property sukurimas:
student1Obj.isActive = true;
console.log(student1Obj);

// Objekto property istrinimas:
delete student1Obj.group;
console.log(student1Obj);

// masyvo sukurimas objekte:
student1Obj.hobbies = ['sport', 'reading'];

student1Obj.hobbies.map(hobby => console.log(hobby))

student1Obj.contacts = {
   phone: 868645868,
   email: 'jonas.petraitis@petraitis.com'
};
console.log(student1Obj);

// Norint pasiekti objekto objekta reikia:
console.log(student1Obj.contacts.email);