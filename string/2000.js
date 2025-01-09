const word = "abcdefd"
const ch = "d"

// console.log(word.indexOf(ch));

// : word.indexOf(ch)



let newString = (word.substring(0,word.indexOf(ch)+1));
console.log(word)
console.log(newString)
let temp = ''

for (let i = newString.length - 1; i >= 0; i-- ) {
    temp = temp + newString[i]
}

temp = temp + 





// for (const char of newString) {
//     console.log(char)
// }





