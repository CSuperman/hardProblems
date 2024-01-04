/*

It would be wonderful if possible to translate most search problems
to binary search for it's efficiency...

*/

var BS = function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return low
}

var LIS = function longestIncreasingSubsequence(arr) {
  const subseq = [];

  for (let idx = 0; idx < arr.length; idx++) {
    const pos = BS(subseq, arr[idx]);

    subseq[pos] = arr[idx]

 
  }

  return subseq.length;
}


arr1 = [ ]
console.log(LIS(arr1))	// result: 0

arr3 = [1, 1, 1, 1]
console.log(LIS(arr3)) // result: 1
