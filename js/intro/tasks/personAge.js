// Parasyti if salyga: jei asmuo turi daugiau nei 18 metu, "loterijos bilietus pirkti gali". Jei turi ma=iau nei 18 metu - "loterijos bilietu pirkti negali":

let personAge = 18;


//variantas su >=:
if (personAge >= 18) {
   console.log('loterijos bilietus pirkti gali');
} else {
   console.log('loterijos bilietu pirkti negali');
}

//Variantas su <=:
if (personAge <= 17) {
   console.log('loterijos bilietu pirkti negali');
} else {
   console.log('loterijos bilietus pirkti gali');
}

// Variantas su >:
if (personAge > 17) {
   console.log('loterijos bilietu pirkti gali');
} else {
   console.log('loterijos bilietus pirkti negali');
}

//Variantas su <:
if (personAge < 18) {
   console.log('loterijos bilietu pirkti negali');
} else {
   console.log('loterijos bilietus pirkti gali');
}

