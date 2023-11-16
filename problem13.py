def canVisitAllRooms(rooms):
  visited = set()
  stack = [0]

  while stack:
    room = stack.pop()
    visited.add(room)

    for key in rooms[room]:
        if key not in visited and key not in stack:
            stack.append(key)

  return len(visited) == len(rooms)


print(canVisitAllRooms(rooms = [[1],[2],[3],[]]))         #output: true
print(canVisitAllRooms(rooms = [[1,3],[3,0,1],[2],[0]]))  # output: false
