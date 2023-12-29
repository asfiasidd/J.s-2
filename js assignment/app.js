//1. Rewrite the following code using a ternay operator :

// let result = (score >= 80)? "Pass": "fail";


//2. How does the optional chaining operator (?.) work, and how can i be used to access nested properties of an object?


// const user = {
//     name : "asfia",
//     address: {
//         city : "karachi",
//         country : "Pakistan"
//     }
// };



//3. Compare the for .....in loop and the for....of loop in terms of their use cases and the types of valuse they iterate over.

// const obj = {a:1, b:2, c:3}
// //for...in loop
// for (let prop in obj ){
//     console.log(prop);
// }
// const array = [1, 2, 3];
// //for....of loop
// for (let value of array){
//     console.log(value);
// }



//4.Define a function calculateAverage that takes an array of numbers as a argument and rturns the average value.

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
    
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
    
//     return average;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const average = calculateAverage(numbers);
//   console.log(average);


//5. Explain the concept of "closure" in javascript and provide an example of their practical use.

// function outerFunction(){
//  const  outerVaraible = "Hello"

// function innerFunction(){
//     console.log(outerVaraible);

// }
//      return innerFunction;
// }

// const closure = outerFunction()
// closure();


//6. Create an object named student with peoperties name, age, and grades. And a method calculateAverage that calculate the average of the grades.

//  const student = {
//     name : "asfia",
//     age : "18", 
//     grades : [88, 66, 95, 30],
//     calculateAverage: function(){
//         const sum = this.grades.reduce((acc, grade) => acc + grade, 0 );
//         const average = sum/this.grades.length;
//         return average;
//     }
//  };
//  const average = student.calculateAverage();
//  console.log(average);


//7. How can you clone an object in javascript and also give one example each deep copy and shallow copy and reference copy.
//shallow copy

// const originalObject = {name: "asfia", age : "18", hobbies : ['cooking', 'reading']}
// const shallowCopy = Object.assign({}, originalObject);
// shallowCopy.name = "asfia",
// shallowCopy.hobbies.push('painting');
// console.log(originalObject);
// console.log(shallowCopy);


// // Deep copy
// const deepCopy = ((originalObject));

// deepCopy.name = 'asfia';
// deepCopy.hobbies.push('painting');

// console.log(originalObject);
// console.log(deepCopy);


//8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternay operator.

// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++){
//    const number = numbers [i];
//    const isEven = number % 2 === 0 ? 'even' : 'odd';
//    console.log(`${number} is ${isEven}`)
// }


//9. Describe the differences between the loop, while loop, and do... while loop in javascript . when might you use each?
//for
// for (let i = 0; i < 5; i ++){
//     console.log(i)
// }

// //while
// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }

// //Do...while
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5)


//10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object .

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie' }
//   ];
  
//   for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const userAge = user.age?.toString() || 'Age unknown';
//     console.log(`${user.name} is ${userAge} years old.`);
//   }


//11. Write a for...in loop that iterates over the properties of an object and logs each property name value.

// const person = {
//   name : "asfia",
//   age : "18",
//   city : "karachi"
// };
//  for (let key in person){
//   console.log(`Property: ${kay}, Value: ${person[key]}`);
//  }


//12. Explain the use of the break and continue statements within loops.Provide scenarios where each might be used.
//break
// const numbers = [2, 4, 7, 12, 15, 9];
// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > 10 ){
//     break;
//   }
//   console.log(numbers[i]);
// }


//continue
// const numbers = [2, 4, 7, 12, 15, 9];
// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] % 2 === 0){
//     continue;
//   }
//   console.log(numbers[i]);
// }



//13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operatir to determine the tax rate.
// function calculateTax(income) {
//   const taxRate = income > 50000 ? 0.3 : 0.2;
//   const taxAmount = income * taxRate;
//   return taxAmount;
// }

// const income = 60000;
// const tax = calculateTax(income);
// console.log(tax); 


//14. Create an object car with properties make, model, and a method startEngine that logs a message. instantiate the object and call the method.

// var carname = {
//   make : "Toyota",
//   model : "Camry",

//  startEngine: function () {
//   console.log("The engine is started");
//  }
//  }


//15. Explain the differences between regular functions arrow functions in terms of scope, this binding, and their use a methods.
//Regular Functions
// const obj = {
//   name: "World",
//   sayHello: function() {
//     console.log("Hello, " + this.name);
//   }
// };
// obj.sayHello(); 


//Arrow Functions:
const obj = {
  name: "World",
  sayHello: () => {
    console.log("Hello, " + this.name); 
  }
};
obj.sayHello(); 









