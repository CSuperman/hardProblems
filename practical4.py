class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right)
            if nums[mid] > nums[mid + 1]:  
                right = mid  			# Search in the left half (including mid)
	    else:  				# Executes only if mid is not a peak
                left = mid + 1
        return left  				# left will always be the peak element


nums = [1, 2, 3, 1]
print(findPeakElement(nums)	# output: 2

print(findPeakElement([3])	# output: 0
