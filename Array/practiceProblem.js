// Problem Description:
// 1.  Given an array of student grades, calculate the average grade and then count how many students scored above this average.
// grades = [88, 92, 75, 91, 85, 82, 96, 89, 78, 77];

const grades = [88, 92, 75, 91, 85, 82, 96, 89, 78, 77];
const total = grades.reduce((acc, curr) => acc + curr, 0);
// console.log(total);
const averageGrade = total / grades.length;
// console.log(averageGrade);
const aboveAverage = grades.filter((grade) => grade > averageGrade);
// console.log(aboveAverage);

// 2. Given an array of integers, find the largest and the smallest numbers using JavaScript array methods.

// numbers = [45, 76, 30, 89, 100, 25, 48, 57];

const numbers = [45, 76, 30, 89, 100, 25, 48, 57];

// console.log(Math.max(...numbers));

// console.log(Math.min(...numbers));

// 3. Write a function that removes all duplicate values from an array.

//  data = [1, 4, 2, 2, 3, 4, 8, 7, 8, 3];

const data = [1, 4, 2, 2, 3, 4, 8, 7, 8, 3];

const uniqueData = data.filter(
  (value, index, self) => self.indexOf(value) === index
);

// 4.  Write a function that rotates an array to the right by a given number of steps. For example, given [1, 2, 3, 4, 5] and 2 steps, the result should be [4, 5, 1, 2, 3].

const array = [1, 2, 3, 4, 5];
const steps = 2;

const rotateArray = (array, steps) => {
  const part1 = array.slice(array.length - steps);
  console.log(part1);
  const part2 = array.slice(0, array.length - steps);
  console.log(part2);
  return part1.concat(part2);
};

// 5. Given two sorted arrays, merge them into a single, sorted array.

const arr1 = [10, 1, 15];
const arr2 = [12, 14, 16, 18];

const combinedArray = arr1.concat(arr2).sort();

// console.log(combinedArray);

// 6.  Given an array of size n and a number k, find all elements that appear more than n/k times in the array.

//  arr = [3, 1, 2, 2, 1, 2, 3, 3];
//  k = 4;

const arr = [3, 1, 2, 2, 1, 2, 3, 3];
const k = 4;

function findElements(arr, k) {
  const n = arr.length;
  const threshold = n / k;
  const frequencyMap = {};


  arr.forEach((item) => {
    if (frequencyMap[item]) {
      frequencyMap[item]++;
    } else {
      frequencyMap[item] = 1;
    }
  });

  const result = Object.keys(frequencyMap).filter(
    (key) => frequencyMap[key] > threshold
  );

  return result.map((item) => Number(item));
}

const result = findElements(arr, k);
console.log(result);
