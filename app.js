const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr);

console.log(sum); // Выведет 15


const numbers1 = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Выведет [2, 4]


const numbers2 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Выведет [2, 4, 6, 8, 10]


const numbers3 = [1, 2, 3, 4, 5];

const doubledNumbers1 = numbers.map((num) => num * 2);

console.log(doubledNumbers1); // Выведет [2, 4, 6, 8, 10]