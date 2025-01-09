const s = "ileetcode"

const words = ["i","love","leetcode","apples"]

let temp = "";

for (const word of words) {
    temp = temp + word;
    if (temp == s) {
        console.log(true);
    } 
}

console.log(false);






// console.log(s.startsWith([words[0]]));



// console.log(words.join(""));
