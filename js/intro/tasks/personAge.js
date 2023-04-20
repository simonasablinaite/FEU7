// Parasyti if salyga: jei asmuo turi daugiau nei 18 metu, "loterijos bilietus pirkti gali". Jei turi ma=iau nei 18 metu - "loterijos bilietu pirkti negali":

let personAge = 18;

//variantas su >=:
if (personAge >= 18) {
   console.log('loterijos bilietu pirkti gali');
} else {
   console.log('loterijos bilietu pirkti negali');
}

//Variantas su <=:
if (personAge <= 17) {
   console.log('loterijos bilietu pirkti negali');
} else {
   console.log('loterijos bilietu pirkti gali');
}

// Variantas su >:
if (personAge > 17) {
   console.log('loterijos bilietu pirkti gali');
} else {
   console.log('loterijos bilietu pirkti negali');
}

//Variantas su <:
if (personAge < 18) {
   console.log('loterijos bilietu pirkti negali');
} else {
   console.log('loterijos bilietu pirkti gali');
}

console.log('******************************')
personAge = 16;
// Papildyti salyga: jei asmens amzius nuo 16 iki 18 - "bilietus gali pirkti su tevu sutikimu":

console.log('***pirmas variantas***');
if (personAge < 16) {
   console.log('loterijos bilietu pirkti negali');
} else if (personAge <= 17) {
   console.log('bilietus gali pirkti su tevu sutikimu');
} else {
   console.log('loterijos bilietu pirkti gali');
}

console.log('***antras variantas***');
if (personAge < 16) {
   console.log('loterijos bilietu pirkti negali');
} else if (personAge == 16 || personAge <= 17) {
   console.log('bilietus gali pirkti su tevu sutikimu');
} else {
   console.log('loterijos bilietu pirkti gali');
}




