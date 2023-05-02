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
}

console.log(imone1);

console.clear();

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