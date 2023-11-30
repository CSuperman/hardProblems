from collections import defaultdict, deque

def busNumsToLocation(routes, source, target):
    if source == target:
        return 0

    graph = defaultdict(list)
    for x, route in enumerate(routes):
        for stop in route:
            for r in route:
                if stop != r:
                    graph[stop].append(r)

    visited = set()
    queue = deque([(source, 0)])
    while queue:
        stop, buses = queue.popleft()
        if stop == target:
            return buses

        if stop in visited:
            continue

        visited.add(stop)
        for neighbor in graph[stop]:
            queue.append((neighbor, buses + 1))

    return -1

# Testing 1, 2
print(busNumsToLocation([[1, 2, 7], [3, 6, 7]], 1, 6))  # Output: 2
print(busNumsToLocation([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12))  # Output: -1
