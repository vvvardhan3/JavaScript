const s = "iiii";
const k = 1;

let result = 0;

// Calculate the initial sum of the character values
for (const element of s) {
  result += element.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

// Function to calculate the sum of digits of a number
function getSumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// Apply the sum-of-digits transformation k times
// Here we need to check if the transformation should change the result.
if (result > 9) {
  for (let i = 0; i < k; i++) {
    result = getSumOfDigits(result);
  }
}

console.log(result);
