function findPeakElement(nums: number[]): number {

  var r = nums.length - 1	// right
  var l = 0			// left


  while(l < r) {
    var mid = Math.floor(l + (r - l) / 2)

    if (nums[mid] < nums[mid+1]) {
      l = mid + 1
    } 

    else {
      r = mid
    }
  }

  return l
};


const nums = [1, 2, 3, 1]
console.log(findPeakElement(nums))	// output: 2

// you may have to reset the nums variable before this works
// const nums = [3]
// console.log(FPE(nums))	// output: 0
