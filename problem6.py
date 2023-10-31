# problem: return all possible subsets in a linked list - no duplicate results

# input example: nums = [1,2,3]

def sub_sets(self, nums: List[int]) -> List[List[int]]:
        
        def helper(index, aSet):
            if index == len(nums):
                subSets.append(aSet)
                return
            

            helper(aSet + [nums[index]], index + 1)
            helper(aSet, index + 1)
        
        subSets = []
        helper([], 0)
        return subSets

# output example: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
