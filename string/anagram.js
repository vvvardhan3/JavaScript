let s = "anagram";
let t = "nagaram";

s = s.split("").sort().join("")
t = t.split("").sort().join("")

console.log(s === t)

