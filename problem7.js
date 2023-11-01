
// input example: 
nums = [1, 2, 0]

function 1stMissingPositive(nums) {
    let min = 1
    let dict = {}
    for (let idx = 0; idx < nums.length; idx++) {
        dict[nums[idx]] = nums[idx]
    }
    while (dict[min]) {
        min++
    }
    return min
}

// output: 3
