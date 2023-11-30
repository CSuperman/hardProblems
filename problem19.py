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
