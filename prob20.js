function topKfrequent(nums, k) {
  const frequencyMap = {};
  const frequentElements = [];

  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  const sortedEntries = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    frequentElements.push(parseInt(sortedEntries[i][0]));
  }

  return frequentElements;
}



console.log(topKfrequent([1,1,1,2,2,3], 2)) // output: [1, 2]
console.log(topKfrequent([1], 1)) // output: [1]
