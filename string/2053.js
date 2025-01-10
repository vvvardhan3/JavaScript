const arr = ["d","b","c","b","c","a"]
const k = 2

let duplicate_arr = []

for (const element of arr) {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
        duplicate_arr.push(element)
    }
}

if (k > duplicate_arr.length) {
    console.log(" ")
} else {
    console.log(duplicate_arr[k - 1] );
    
}

// console.log(duplicate_arr)


