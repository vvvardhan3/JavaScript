let name = "Vishnu Vardhan";
let age = 24;
let hobbies = ["Programming", "Sports", "Travel"]; // Array
let job = {
  title: "Software Developer",
  place: "New York",
  salary: 50000,
}; // Object

let adultYears;

function calculateAdultYears() {
  return age - 18;
} // Function

adultYears = calculateAdultYears();
// alert(adultYears)

let person = {
  name: "Vishnu Vardhan",  // Property
  greet() {  // Method
    console.log("Hello!"); // Built-in Method to Print in Console
  },
};


person.greet();



let add = 10 + 4;
let sub = 10 - 4;
let multiple = 10 * 4;
let division = 10 / 4;
let modulus = 10 % 4;

console.log(add);
console.log(sub);
console.log(multiple);
console.log(division);
console.log(modulus);

console.log("Vishnu" + " Vardhan");

let userName = "Vishnu Vardhan";
console.log(userName.length);
