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
    adultYears = age - 18;
} // Function

calculateAdultYears();
alert(adultYears)
