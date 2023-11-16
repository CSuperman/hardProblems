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
