function minJumps(nums: number[]): number {
    let jumps = 0, currentEnd = 0, currentDist = 0
    for (let idx = 0; idx < nums.length - 1; idx++) {
        currentDist = Math.max(currentDist, idx + nums[idx])
        if (idx === currentEnd) {
            jumps++
            currentEnd = currentDist
        }
    }
    return jumps
}


console.log(minJumps([2, 3, 1, 1, 4]));  // Output: 2
console.log(minJumps([2, 3, 0, 1, 4]));  // Output: 2
console.log(minJumps([2, 1, 0, 1, 4]));  // Output: 2
