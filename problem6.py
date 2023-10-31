
def sub_sets(self, nums: List[int]) -> List[List[int]]:
        
        def helper(index, subSet):
            if index == len(nums):
                result.append(subSet)
                return
            

            helper(subSet + [nums[index]], index + 1)
            helper(subSet, index + 1)
        
        result = []
        helper([], 0)
        return result

