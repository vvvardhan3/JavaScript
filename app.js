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
    console.log("Hello!"); // Built-in Method to Print in Console.
  },
};


person.greet();