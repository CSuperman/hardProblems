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
