// MAP() metodas grazina reiksme (naudojant return)

const arr = [1, 5, 7, 9, 20];

console.log('*******map*****');
let withMap = arr.map((numb) => {
   console.log(numb);
});

withMap = arr.map((e) => {
   console.log(e * e);
})

withMap = arr.map(e => e.toString());
console.log(withMap);

// FOREACH() metodas reiksmes negrazina. Reiksme galima tik isvesti i konsole
console.log('*******forEach*****');
let withForEach = arr.forEach((numb) => {
   console.log(numb);
});

withMap = arr.forEach((e) => { //reiksme isspausdinama i konsole
   console.log(e * e);
})

withForEach = arr.forEach(e => e.toString()); //reiksme negrazinama
console.log(withForEach);

