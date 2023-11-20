from typing import List

points = [[10,16],[2,8],[1,6],[7,12]]

pointz = [[1,2],[3,4],[5,6],[7,8]]

rewards = [[1,2],[2,3],[3,4],[4,5]]

class Solution:
  def MinArrowShotsFound(self, points: List[List[int]]) -> int:

    # problem got a lot easier after next line
      points.sort(key = lambda x: x[1])
      counter = 0
      ender = float("-inf")
      for y, z in points:
        if ender < y:
          counter += 1
          ender = z
      return counter

sol = Solution()

print(sol. MinArrowShotsFound(points)) # output: 2

print(sol. MinArrowShotsFound(pointz)) # output: 4

print(sol. MinArrowShotsFound(rewards)) # output: 2
