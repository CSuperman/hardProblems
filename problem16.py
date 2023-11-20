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
