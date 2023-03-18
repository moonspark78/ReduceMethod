const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TOTAL
const total = numbers.reduce((acc, i) => acc + i);
console.log(total);

//MOYENNES
const moy = numbers.reduce((acc, i) => acc + i) / numbers.length;
console.log(moy);

//MULTIPLICATIONS
const mul = numbers.reduce((acc, i) => acc * i);
console.log(mul);

// MAX IN ARRAY
const arr = [1, 23, 3, 456, 5, 67, 7, 87, 9, 10];
const to = arr.reduce((acc, i) => (acc > i ? acc : i));
console.log(to);

//
const notes = [
  {
    mat: "francais",
    note: 10,
  },
  {
    mat: "philo",
    note: 13,
  },
  {
    mat: "eps",
    note: 16,
  },
];

const tac = notes.reduce((acc, i) => acc + i.note, 0) / notes.length;
console.log(tac);
