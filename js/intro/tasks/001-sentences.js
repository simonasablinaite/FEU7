// SAKINIŲ KONSTRAVIMAS:

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.
const name = 'John';
const lastName = 'Doe';
const age = 25;
const personalCode = 37878787878;
const city = 'Kaunas';

let asmensInformacija = name + ' ' + lastName + ' (amžius ' + age + ' m.), asmens kodas: ' + personalCode + ', gyvenamasis miestas: ' + city + '.';

console.log(asmensInformacija);
console.log(name + " " + lastName + " (amžius " + age + " m.), asmens kodas: " + personalCode + ", gyvenamasis miestas: " + city + ".");
console.log(name + ` ` + lastName + ` (amžius ` + age + ` m.), asmens kodas: ` + personalCode + `, gyvenamasis miestas: ` + city + `.`);
console.log(`${name}​ ${lastName}​ (amžius ${age}​ m.), asmens kodas: ${personalCode}​, gyvenamasis miestas: ${city}​.`);

// John said: "Good morning".
console.log('John said: "Good morning".');
console.log(`John said: "Good morning".`);

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);
// John said: "That's my car".
console.log(`John said: "That's my car".`);
console.log('John said: "That' + "'s my car" + '".');
// John `said`: "That's my car".
console.log('John `said`: ' + `"That's my car".`);
console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);
// John `said`: "That's \my\ car".
console.log('John `said`: "That\'s \\my\\ car".');
console.log(`John \`said\`: "That's \\my\\ car".`);
console.log("John `said`: \"That's \\my\\ car\".");
// John \`said\`: "That's my car".
console.log('John \\`said\\`: "That\'s my car".');
console.log("John \\`said\\`: \"That's my car\".");
console.log(`John \\\`said\\\`: "That's my car".`);
