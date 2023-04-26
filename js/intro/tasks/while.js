function task1(start, end, number) {
   let num = 2;
   let i1 = start;
   while (i1 <= end) {
      console.log(`${i1} * ${num} = ${i1 * num}`)
      i1 += number
   }
}
task1(0, 5, 2);
console.log('end...');

console.log('***********************');
function task2(start, end, number) {
   let num = 5;
   let i2 = start
   while (i2 <= end) {
      console.log(`${i2} + ${num} = ${i2 + num}`)
      i2 += number;
   }
}
task2(0, 5, 1);
console.log('end...');

console.log('***********************');
function task3(start, end, number) {
   let num = 3;
   let i3 = start;
   while (i3 <= end) {
      console.log(`${i3} ** ${num} = ${i3 ** num}`)
      i3 += number;
   }
}
task3(0, 5, 1);
console.log('end...');

console.log('***********************');
function task4(start, end, number) {
   let num = 5;
   let i4 = end;
   while (i4 > start) {
      console.log(`${i4} + ${num} = ${i4 + num}`)
      i4 -= number;
   }
}
task4(0, 5, 1);
console.log('end...');

console.log('***********************');
function task5(start, end, number) {
   let num = 3;
   let i5 = end;
   while (i5 > start) {
      console.log(`${i5} ** ${num} = ${i5 ** num}`)
      i5 -= number;
   }
}
task5(0, 5, 1);
console.log('end...');
