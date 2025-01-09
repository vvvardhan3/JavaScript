const patterns = ["a","a","a"]
const word = "ab"

let count = 0;


for (const pattern of patterns) {
    if (word.includes(pattern)) {
        count++;
    }
}

console.log(count)