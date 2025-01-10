const word = "abcdefd"
const ch = "d"

let res = ""
let remining = ""

res = word.slice(0,word.indexOf(ch) + 1)

remining = word.slice(word.indexOf(ch) + 1)

console.log(res.split("").reverse().join("").concat(remining));






// console.log(res.split("").reverse().join(""));








