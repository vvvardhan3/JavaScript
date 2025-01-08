const x = 121;

function palindrome(x) {
    if (x < 0) {
        return false;
        
    } else {
        return x === +x.toString().split("").reverse().join("")
    }
    
}

const result = palindrome(x);

console.log(result);





