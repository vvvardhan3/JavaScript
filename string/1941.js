const s = "abacbc";

let table = {};


for (let i = 0; i < s.length; i++) {
  table[s[i]] = (table[s[i]] || 0) + 1;
}
let temp = table[s[0]];

const frequencies = Object.values(table);

    for (let i = 1; i < frequencies.length; i++) {
        if (frequencies[i] !== frequencies[0]) {
            return false;
        }
    }

    return true; 

// console.log(table)
