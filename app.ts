///         Question : 46
// let laptop = {
    // make: "hp",
    // model: "HP Spectre",
    // year: 2024,
    // describe: function () {
    //   console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    // },
//   };/
//   laptop.describe();

  //           Question : 47

//   let laptops = [
//     { make: "Dell", model: "Latitude", year: 2022 },
//     { make: "HP", model: "Spectre", year: 2023 },
    // { make: "Lenovo", model: "ThinkPad", year: 2021 }
// ];

/// destructuring operator
// let [laptop1, laptop2] = laptops;

// console.log(laptop1); // Output: { make: "Dell", model: "Latitude", year: 2022 }
// console.log(laptop2); // Output: { make: "HP", model: "Spectre", year: 2023 }

//              Question : 48

// let laptopsSet1 = [1200, 1300, 1100];
// let laptopsSet2 = [1250, 1150, 1350];

// let combinedPrices = [...laptopsSet1, ...laptopsSet2].sort((a, b) => a - b);

// console.log(combinedPrices); // Output: [1100, 1150, 1200, 1250, 1300, 1350]

//              Question : 49

// const logHobbies = (...hobbies) => {
//     hobbies.forEach(hobby => {
//         console.log(`Mujhe ${hobby} pasand hai.`);
//     });
// };

// logHobbies('reading', 'cooking', 'gardening');

//                Question : 50 

// Multiline template literal describing ideal day
// const idealDay = `My ideal day would involve:
// 1. Waking up early and going for a jog.
// 2. Spending a few hours coding on a personal project.
// 3. Ending the day by reading a good book.
// `
// console.log(idealDay);

//               Question : 51

// Original function to calculate area of a rectangle
// function calculateRectangleArea(length:number, width:number) {
//     return length * width;
// }
// // Refactored into an arrow function
// const calculateAreaArrow = (length:number, width:number) :number => length * width;

// // Function call
// let area = calculateRectangleArea(5, 3);
// console.log("Area of the rectangle:", area); // Output: Area of the rectangle: 15


//               Question : 52

// // Sets up details about a smartphone
// let smartphone = {
//     make: "Samsung",
//     model: "Galaxy S21",
//     specs: {
//       storage: "128GB",
//       screenSize: "6.2 inches",
//       batteryLife: "18 hours",
//     },
//   };
  
//   // Shows what we've set up about the smartphone
//   console.log(smartphone);

//              Question : 53

// Nested list of skills
// const programmerSkills = {
//     codingLanguages: ["JavaScript", "Python", "Java", "C++"],
//     tools: ["Visual Studio Code", "Git", "Postman", "Docker"],
//     frameworks: ["React", "Node.js", "Spring Boot", "TensorFlow"]
// };

// const { codingLanguages, tools, frameworks } = programmerSkills;

// // Showing a skill from each category
// console.log(
//     `Language: ${codingLanguages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`
//   );

//               Question : 54

// function createObjectWithDynamicKey(key:string, value:string) {
//     let dynamicObject = {};
//     dynamicObject[key] = value;
//     return dynamicObject;
//   }
  
//   // Example usage:
//   let userPreference = createObjectWithDynamicKey("theme","dark");
//   console.log(userPreference); // Output: { theme: 'dark' }
  
//   // Another example:
//   let dynamicObject2 = createObjectWithDynamicKey("language", "JavaScript");
//   console.log(dynamicObject2); // Output: { language: 'JavaScript' }
  
//               Question : 55

// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map((number) => number * 2);

// console.log("Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8, 10]

//                Question : 56

// A mixed bag of items
// let mixedList = [1, "apple", 2, "banana", true, "carrot"];


// // Only strings ko filter karne ka code
// let stringList = mixedList.filter(item => typeof item === 'string');

// console.log(stringList); // Output: [ 'apple', 'orange', 'corrot' ]

//                 Question : 57

// Grades ki list
// let grades = [85, 90, 75, 95, 80]

// let sum = grades.reduce((total, grade) => total + grade);
// let average = sum / grades.length;

// console.log("Average of grades:", average);

//                 Question : 58

// function averageScore(...scores: number[]): number {
//   let total = scores.reduce((sum, score) => sum + score, 0);
//   return total / scores.length;
// }

// console.log(averageScore(80, 90, 100, 70)); 


//                    Question : 59

// function makeAdder(valueToAdd: number): (number:any) => number {
//   return function (number: number): number {
//     return number + valueToAdd;
//   };
// }

// let addFive = makeAdder(5);

// console.log(addFive(10)); // Output: 15

//                     Question : 60

// // Self-setup user profile
// let userProfile = (function () {
//   let name: string = "John";
//   let age: number = 30;

//   return {
//     displayInfo: function () {
//       console.log(`Name: ${name}, Age: ${age}`);
//     },
//   };
// })() /// () immediately invokes 

// userProfile.displayInfo(); // Output: Name: John, Age: 30

//                     Question : 61

// enum VehicleType {
//   Car,
//   Truck,
//   Motorcycle,
// }

// console.log(VehicleType.Car);

//                      Question : 62

 // Creating a blueprint (interface) for student information
// interface Student {
  // name: string;
  // age: number;
  // courses: string[];
// }

// // Filling in the blueprint with an example student
// let student: Student = {
//   name: "Farhan",
//   age: 16,
//   courses: ["Mathematics", "Physics", "English"]
// }

// console.log(student);

//                       Question : 63

// type Shape = {
//   kind: "circle" | "rectangle";
//   radius?: number; // Only for circles
//   width?: number; // Only for rectangles
//   height?: number; // Only for rectangles
// };

// // Describing a circle using our Shape type
// let circle: Shape = {
//   kind: "circle",
//   radius: 5,
// };

// // Describing a rectangle using our Shape type
// let rectangle: Shape = {
//   kind: "rectangle",
//   width: 10,
//   height: 20,
// };

// console.log(circle);
// console.log(rectangle);


//                       Question : 64

// function combineStringAndNumber(text: string, number: number): string {
//   return `${text}${number}`;
// }

// // Example usage:
// console.log(combineStringAndNumber("Age: ", 30)); // Output: Age: 30

//                     Question : 65

// function remainder(a: number, b: number): number {
//   return a % b;
// }

// // Example usage:
// console.log(remainder(5, 2)); // Output: 1

//                    Question : 66

// function checkBothTrue(value1: boolean, value2: boolean): boolean {
//   return value1 && value2;
// }

// // Example usage
// console.log(checkBothTrue(true,true)); // Output: false

//                     Quuestion : 67

// function sumNumberAndString(number1: number, numberString: string): number {
//   return number1 + Number(numberString);
// }

// // Example usage:
// console.log(sumNumberAndString(5, "7")); // Output: 12

//                      Question : 68

// function multiplyDecimals(num1: number, num2: number): number {
  // return Math.round(num1 * num2 * 100 )/100;
// }

// Example usage:
// console.log(multiplyDecimals(3.25, 2.5)); // Output: 8.13

//                 Question : 69

// function divideAndRemainder(
  // dividend: number,  
  // divisor: number    
// ):
//  { quotient: number; remainder: number } {

//   let quotient = Math.floor(dividend / divisor); 
//   let remainder = dividend % divisor;           
  
//   return { quotient, remainder };  
// }

// console.log(divideAndRemainder(10, 3)); // Output: { quotient: 3, remainder: 1 }

//                  Question : 70

// function printNumbers() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// // Function call
// printNumbers();

//                  Question : 71

// let age = 25;
// age = 26; 
// console.log(age); // Output: 26

// const names = "farhan";
// try {
//   name = "rehan";  // This line will cause an error
// } catch (error) {
//   console.log("Error: Can't reassign a `const`-declared variable."); // Yeh message show hoga
// }

//                  Question : 72

// {
//   let blockLet = 10; 
//   const blockConst = 20; 

//   console.log("Inside block:");
//   console.log("x:", blockLet ); 
//   console.log("y:", blockConst); 
// }


// try {
//   console.log(blockLet); // This will fail
// } catch (error) {
//   console.log("`blockLet` is not accessible outside the block.");
// }

// try {
//   console.log(blockConst); // This will also fail
// } catch (error) {
//   console.log("`blockConst` is not accessible outside the block.");
// }

//                 Question : 73

// function updateVariable() {
//   let number = 5; 
  
//   console.log("Initial value:", number);  
  
//   number = 10; 
  
//   console.log("Updated value:", number);
// }

// // Function call
// updateVariable();


//                  Question : 74

// function swapValues() {
//   let a = 5,
//     b = 10; 
//   console.log("Before swap: a =", a, "b =", b);

//   let temp = a; 
//   a = b;
//   b = temp; 

//   console.log("After swap: a =", a, "b =", b);
// }

// swapValues();

//                  Question : 75

// function useCompoundOperators() {
//   let x = 4; 
//   console.log("Initial x:", x);

//   x += 2; 
//   console.log("After addition:", x); 

//   x -= 1; 
//   console.log("After subtraction:", x);

//   x *= 3; 
//   console.log("After multiplication:", x); 

//   x /= 2;
//   console.log("After division:", x); 
// }

// useCompoundOperators();

//                   Question : 76

// // Define a function that adds two numbers and returns the result
// function addNumbers(num1:number, num2:number) {
//   return num1 + num2;
// }

// // Call the function and log the result
// let number1 = 5;
// let number2 = 3;
// let sum = addNumbers(number1, number2);
// console.log("The sum is:", sum);// outputs 8

//                     Question : 77

// function greetUser(name = "Anonymous") {
//   console.log(`Hello ,${name}!`);
// }

// greetUser("farhan");  // Output: Hello, Alice!

// greetUser();  // Output: Hello, Anonymous!

//                      Question : 78

// function squareDeclaration(number: number): number {
//   return number * number;
// }

// const squareExpression = function (number: number): number {
//   return number * number;
// };

// console.log(squareDeclaration(4)); // Outputs: 16
// console.log(squareExpression(4)); // Outputs: 16

//                        Question : 79
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };

// console.log(car.model);

//                        Question : 80

// let car:any = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2023
// };
// car.color = "Silver";

// car.year = 2021;

// console.log(car);

//                         Question : 81 

// function logObjectProperties(obj: object) {
//   for (let property in obj) {
//     console.log(`${property}: ${obj[property]}`);
//   }
// }
// logObjectProperties({
//   make: "Toyota",
//   model: "Corolla",
//   year: 2021,
//   color: "blue",
// });

//                           Question : 82



// function stringLength(input: string): number {
//   return input.length;
// }

// console.log(stringLength("farhan"));// outputs: 6

//                          Question : 83

// function convertCase(str: string) {
//   let upperStr = str.toUpperCase(); 
//   let lowerStr = str.toLowerCase();

//   console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
// }

// convertCase("Hello World");

//                           Question : 84

// function replaceJavaScriptWithTypeScript(sentence: string): string {
//   return sentence.replace(/JavaScript/g, "TypeScript");
// }

// console.log(
//   replaceJavaScriptWithTypeScript(
//     "I love JavaScript and JavaScript is awesome!"
//   )
// );
