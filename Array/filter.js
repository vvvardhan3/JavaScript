const nums = ['1', '2', '3', '4', '5']

const filteredNums = nums.filter( (item, index, array) => {
    return item > 3;
})

console.log(filteredNums);