console.clear();

/*
UŽDUOTIS:
1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
2. Prie objekto pridėti:
2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
2.9. Property „contacts", kuris turės:
      2.9.1. „phone"
      2.9.2. „email"
      2.9.3. „address", kuris turės:
          2.9.3.1. „country"
          2.9.3.2. „city"
          2.9.3.3. „street"
          2.9.3.4. „apartment"
*/

const imone1 = {
   'company name': 'Vogesta',
   opened: 2020,
   companyCode: 123456789,
   employees: 20,
   ceo: 'Jonas Jonaitis',
   nvo: true,
   workingLocation: ['Lithuania', 'Poland'],
   activityAreas: ['sendaikciu pirkimas', 'sendaikciu pardavimas'],
   contacts: {
      phonee: 861234567,
      email: 'vogesta@vogesta.com',
      address: {
         country: 'Lietuva',
         city: 'Ziezmariai',
         street: 'Ziezmariu g. 1',
         apartament: 1,
      },
   },
   setFullAddress: function () {
      return `${this.contacts.address.street}, ${this.contacts.address.city}, ${this.contacts.address.country}`
   },
   isNVOTrue: function () { //kodel funkcija su boolean reiksme yra zalia? Ka tokia funkcija reiskia? Ar itakos tam jokios nera?
      return this.nvo = true;
   },

   isNVOFalse: function () {
      return this.nvo = false;
   },

   switchNVO: function () {
      return this.nvo = !this.nvo;
   },

   setCountrys: function () {
      return this.workingLocation.join(', ');
   },

   setActivitys: function () {
      return this.activityAreas.join(', ');
   },

   addedCountry: function (newCountry) {
      return this.workingLocation.push(newCountry)
   },

   addedActivity: function (newActivity) {
      return this.activityAreas.push(newActivity)
   },

   removeCountry: function (toRemove) {
      return this.workingLocation = this.workingLocation.filter(country => country !== toRemove);
   },

   removeActivity: function (toRemove) {
      return this.activityAreas = this.activityAreas.filter(item => item !== toRemove);
   },
}

console.log(imone1);

const imone2 = {};
imone2['compnay name'] = 'Eny-Beny';
imone2.opened = 1986;
imone2.companyCode = 987654321;
imone2.employees = 5;
imone2.ceo = 'Petras Petraitis';
imone2.nvo = false;
imone2.workingLocation = ['Lietuva', 'Latvija'];
imone2.activityAreas = ['Reklamos gamyba', 'Spaudos gamyba'];
imone2.contacts = {
   phonee: 867654321,
   email: 'eny@beny.com',
};
imone2.contacts.address = {
   country: 'Lietuva',
   city: 'Palanga',
   street: 'Palangos g. 2',
   apartament: 2,
}

console.log(imone2);

// METODU PANAUDOJIMO UZDUOTYS:
// Imone1: f-jos kuriamos objekto viduje;
// Imone2: f-jos kuriamos objekto isoreje; 

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

imone2.setAddress = function () {
   return `${this.contacts.address.street}, ${this.contacts.address.city}, ${this.contacts.address.country}`;
}

/*6. Sukurti funkcijas, kurios:
6.1. Pakeičia NVO statusą į true.
6.2. Pakeičia NVO statusą į false.
6.3. Keičia NVO statusą iš true į false ir iš false į true.
*/

imone2.nvoTrue = function () {
   return this.nvo = true;
}

imone2.nvoFalse = function () {
   return this.nvo = false;
}

imone2.switchNVO = function () {
   return this.nvo = !this.nvo;
}

/*
7. Sukurti funkcijas, kurios grąžina:
      7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
      7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
*/

imone2.setWorkingLocation = function () {
   return this.workingLocation.join(', ');
}

imone2.setActivityAreas = function () {
   return this.activityAreas.join(', ');
}

/*8. Sukurti funkcijas, kurios prideda:
      8.1. Naują veiklos šalį prie šalių masyvo.
      8.2. Naują veiklos rūšį prie veiklų masyvo.
*/

imone2.addedCountry = function (newCountry) {
   return this.workingLocation.push(newCountry);
}

imone2.addedActivity = function (newActivity) {
   return this.activityAreas.push(newActivity);
}

/*
9. Sukurti funkcijas, kurios pašalina:
9.1. Veiklos šalį iš šalių masyvo.
9.2. Veiklos rūšį iš veiklų masyvo.
*/

imone2.removeCountry = function (toRemove) {
   return this.workingLocation = this.workingLocation.filter(country => country !== toRemove);
}

imone2.removeActivity = function (toRemove) {
   return this.activityAreas = this.activityAreas.filter(item => item !== toRemove);
}

// 5
console.log(imone2.setAddress());
console.log(imone1.setFullAddress());

// // 6
console.log(imone1.isNVOTrue());
console.log(imone2.nvoTrue());
console.log(imone1.isNVOFalse());
console.log(imone2.nvoFalse());

// console.log('****************');
console.log(imone1.switchNVO());
console.log(imone1.switchNVO());
console.log(imone1.switchNVO());

console.log(imone2.switchNVO());
console.log(imone2.switchNVO());
console.log(imone2.switchNVO());

// // 7
console.log(imone1.setCountrys());
console.log(imone1.setActivitys());
console.log(imone2.setWorkingLocation());
console.log(imone2.setActivityAreas());

// // 8
console.log(imone1.addedCountry('JAV'));
console.log(imone1.workingLocation);
console.log(imone2.addedCountry('Prancuzija'));
console.log(imone2.workingLocation);
console.log(imone1.addedActivity('pervezimai'));
console.log(imone1.activityAreas);
console.log(imone2.addedActivity('pervezimai'));
console.log(imone2.activityAreas);

// // 9
console.log(imone1.removeCountry('Poland'));
console.log(imone1.removeActivity('pervezimai'));
console.log(imone2.removeCountry('Poland'));
console.log(imone2.removeActivity('pervezimai'));


