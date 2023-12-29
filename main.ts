const messages: string = "Hello World!!!";

console.log(messages);

/* Data Types */
//  Don’t ever use the types Number, String, Boolean, Symbol, or Object These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.

/* Type Annotations */

// Number
let num: number = 1000000;
let num1: number = 1.2222;
console.log("Is number: ", num);

// String
let fullName: string = "John Doe";
let templateString = `Hello \nWorld, My name is: ${fullName}`;

console.log(fullName);
console.log("Using template string: ", templateString);

// Boolean
let trueOrFalse: boolean = false; // Is boolean
// isBoolean = 1 // Error
console.log(trueOrFalse);

// Object
// Method 1
let person1: {
  name: string;
  age: number;
};

person1 = {
  name: "John Doe",
  age: 25,
};

// Method 2
let person2: {
  name: string;
  age: number;
} = {
  name: "John Doe",
  age: 25,
};

console.log("Name of person 1 is ", person1.name);

// Array
let arrayString: string[] = ["John", "Anna", "Geo"];
arrayString.push("Kim");

let arrayMix: (string | number)[] = ["John", 32]; // mix types

console.log("Array string: ", arrayString);
console.log("Array mix: ", arrayMix);

// Tuple
let tupleType: [string, number?, boolean?]; // Optional tuple elememts, put it at the end
tupleType = ["John", 25, true];

console.log("Is tuple: ", tupleType);

// Enum
enum API_STATUS {
  PENDING,
  FULFILLED,
  REJECTED,
} //  return value (0, 1, 2)

enum API_STATUS1 {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
} //  return value (PENDING, FULFILLED, REJECTED)

let pending = API_STATUS.PENDING;
let fulfilled = API_STATUS.FULFILLED;

console.log("Enum status pending: ", pending, ", fulfill: ", fulfilled);

// Any (any everywhere)
// The variable can hold values of any type
let isAny: any = "John";
isAny = 10;
isAny = true;

console.log("Is any: ", isAny);

// Void
let greet = (messages: string): void => {
  console.log(messages); // Don't return value
};

greet("Hello World!!!");

// Union
let addNumberOrString = (a: number | string, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error("Parameters must be number or string");
};

console.log("Number: ", addNumberOrString(2, 3));
console.log("String: ", addNumberOrString("John", "Doe"));

// Aliases
type customType = number | string;

let isCustomType: customType = 1;
console.log("Is custom type: ", isCustomType);

/* Type Inference */
// Compiler to automatically determine the type of a variable

let isNumber = 10; // Is number
let isString = "John"; // Is string
let isBoolean = true; // Is boolean
let isObject = ["John", "Anna", "Geo", 10]; // Array are considered a special type of object

isObject.push(11);
isObject.push("Kim");
console.log(isObject);
