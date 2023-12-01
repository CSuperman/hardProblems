from collections import Counter

def topKfreq(nums, k):
    count = Counter(nums)
    return [num for num, freq in count.most_common(k)]

print(topKfreq([1, 1, 1, 2, 2, 3], 2)) #output: [1, 2]
print(topKfreq([1], 1)) #output: [1]
