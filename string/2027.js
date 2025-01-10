s = "OXXXXXXOO"
s.length

let moves = 0;

for (let i = 0; i < s.length; i++) {
   if (s[i] == 'X') {
     moves++;
     i += 2
   }
}

console.log(moves);




