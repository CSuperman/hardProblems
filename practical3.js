/*

It would be wonderful if possible to translate most search problems
to binary search for it's efficiency...

*/

var BS = function binarySearch(arr, val) {
  let low = 0
  let high = arr.length - 1
  while (low < high) {
    let mid = Math.floor((low + high) / 2)

    if (arr[mid] >= val) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low;
}



var LIS = function longestIncreasingSubsequence(arr) {

  let subseq = []

 
 for (let idx = 0; idx < arr.length; idx++) {

    let pos = BS(subseq, arr[idx])

    subseq[pos] = arr[idx]


    if (pos == subseq.length) {
      subseq.push(arr[idx])
    }
  }

  return subseq.length;
}
