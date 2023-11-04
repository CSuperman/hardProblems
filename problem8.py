# example input
rooms = [[1],[2],[3],[]]

class Answer:
  def KeysforRooms(self, rooms: List[List[int]]) -> bool:
      Roomz=len(rooms)
      visitList=[1]*Roomz
      que=[0]
      while que:
          queued=que.pop(0)
          if visitList[queued]==1:
              queuedRooms=rooms[queued]
              que.extend(queuedRooms)
          visitList[queued]=0
      if sum(visitList)==0:
          print("Yes, you can visit all rooms")
          return True
      else:
          print("No, you cannot visit all rooms")
          return False

KeysforRooms(self, rooms)
# example output: true
