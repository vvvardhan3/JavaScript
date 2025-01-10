const nums = [1, 2, 3, 4, 5]

const newNum = nums.reduce((prev,item) => {
    return prev + item
})

console.log(newNum);
