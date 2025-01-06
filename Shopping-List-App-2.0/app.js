// Practice with forEach

// Grocery List
// const groceries = ['apples', 'bananas', 'carrots', 'dairy'];

// groceries.forEach((item) => {
//   console.log(item);
// });

// Grocery List 3.0
// const groceries = ['apples', 'bananas', 'carrots', 'dairy'];

// groceries.forEach((food) => {
//   console.log(`This is for dinner tonight ${food}`);
// });

// // Calculating Total Price
// const prices = [29.99, 9.99, 4.99, 15.99];
// let totalPrice = 0;

// prices.forEach((price) => {
//   totalPrice += price;
// });

// console.log(`Total Price: $${totalPrice}`);

// const prices = [29.99, 9.99, 4.99, 15.99];
// let total = 0;

// prices.forEach(price => {
//     total += price;
// });

// console.log(`The total grocery bill is ${total}`);

// Modifying Elements
// const students = ['John', 'Sarah', 'Alice', 'Linda'];
// const studentWithTitles = [];

// students.forEach((name) => {
//   studentWithTitles.push(`${name} Student`);
// });

// console.log(studentWithTitles);

// const students = ['Jimmy', 'Tony', 'Alice', 'Jennifer', 'Ally'];
// const studentsTitle = [];

// students.forEach((student) => {
//   studentsTitle.push(`${student} is a Student at East Elementary.`);
// });

// console.log(studentsTitle);

// Updating Object Properties
// const tasks = [
//   { task: 'Homework', completed: false },
//   { task: 'Dishes', completed: false },
//   { task: 'Laundry', completed: false },
//   { task: 'GYM', completed: true },
// ];

// tasks.forEach((task) => {
//   task.completed = true;
// });

// console.log(tasks);

// indexOf Method

// const color = ['red', 'green', 'purple', 'gray'];
// const indexOfBlue = color.indexOf('blue');
// console.log(indexOfBlue);

// const indexOfPurple = color.indexOf('purple');
// console.log(indexOfPurple);


// const fruits = ['apple', 'banana', 'cherry'];

// if (fruits.indexOf('banana') !== -1) {
//     console.log('Banana is in the list');
// } else {
//     console.log('Banana is not in the list');
// }

// Removing an element by index

// const animals = ['cat', 'dog', 'rabbit', 'hamster'];

// const indexOfRabbit = animals.indexOf('rabbit');
// if (indexOfRabbit !== -1) {
//     animals.splice(indexOfRabbit, 1);
// }

// console.log(animals);

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// fruits.splice(1, 2);
// console.log(fruits);

// const citrusFruits = ['orange', 'grapefruit'];
// citrusFruits.splice(0, 0, 'lemon', 'lime');
// console.log(citrusFruits);

// const colors = ['red', 'green', 'blue', 'yellow'];
// colors.splice(2, 1, 'cyan');

// console.log(colors);