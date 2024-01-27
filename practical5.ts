function firstOccurrenceBinarySearch(arr: number[], target: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;
  let potentialFirst: number = -1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      potentialFirst = mid;
      right = mid - 1; 
    } else if (arr[mid] > target || arr[mid] === undefined) {
      right = mid - 1;
    } else {
      left = mid + 1; 
    }
  }

  return potentialFirst; 
}

// solutions as "index positions" for target number

var arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]
var target = 3

console.log("found at index", firstOccurrenceBinarySearch(arr, target))

var arr1 = [1, 4, 2, 6, 0, 6, 3, 9, 5]
var target1 = 9

console.log("found at index", firstOccurrenceBinarySearch(arr1, target1))

var arr2 = [1, 4, 2, 6, 0, 6, 3, 9, 5]
var target2 = 5

console.log(firstOccurrenceBinarySearch(arr2, target2))
