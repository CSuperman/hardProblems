"""

You find yourself in an enchanted forest filled with mysterious creatures and magical phenomena. 
Your goal is to navigate through the forest to reach the heart of the forest, where the most powerful
magic lies. However, the forest is filled with obstacles and hidden paths, and you must use your wits 
to find the shortest route.


Rules:

Forest Layout: The forest is represented as a grid, where each cell can either be empty
or contain an obstacle.

Movement: You can move in four directions: up, down, left, and right. However, you cannot
move through obstacles.

Hidden Paths: Some cells may contain hidden paths that lead to other parts of the forest. 
These paths are not visible initially and require exploration to uncover.

Loraxes: The forest is inhabited by loraxes who can assist or hinder you on 
your journey. Some beings may reveal hidden paths, while others may block your way or redirect you.


"""

from collections import deque

class Forest:
    def __init__(self, grid, hidden_paths, loraxes):
        self.grid = grid
        self.rows = len(grid)
        self.cols = len(grid[0])
        self.hidden_paths = hidden_paths
        self.magical_beings = magical_beings

def bfs(forest, start, end):
    queue = deque([(start, 0)])                                      # position, steps
    visited = set()
    
    while queue:
        (x, y), steps = queue.popleft()
        
        if (x, y) == end:
            return steps
        
        if (x, y) in visited or not is_valid(forest, x, y):
            continue
        
        visited.add((x, y))
        
        for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            new_x, new_y = x + dx, y + dy
            
            if is_valid(forest, new_x, new_y):
                queue.append(((new_x, new_y), steps + 1))
        
        for path in forest.hidden_paths:
            if (x, y) == path[0] and path[1] not in visited:
                queue.append((path[1], steps + 1))
                visited.add(path[1])
                
    return -1                                                        # invalid path

def is_valid(forest, x, y):
    return 0 <= x < forest.rows and 0 <= y < forest.cols and forest.grid[x][y] != "#"

# Example usage:
if __name__ == "__main__":
    grid = [
        [".", ".", ".", "#", ".", ".", ".", ".", "."],
        [".", ".", "#", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", "#", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "Y", ".", ".", "#", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "Y", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."]
    ]

# Example paths, beings (make sure they are valid locations)
    hidden_paths = [((0, 3), (4, 5)), ((1, 2), (2, 4))]            # "#"
    magical_beings = [((4, 2), "Friendly"), ((6, 6), "Hostile")]   # "Y"   

# Example start, end
    enchanted_forest = Forest(grid, hidden_paths, loraxes)
    start = (0, 0)
    end = (8, 8)
    
    shortest_path_length = bfs(enchanted_forest, start, end)
    
    if shortest_path_length != -1:
        print("shortest path:", shortest_path_length)
    else:
        print("invalid path!")

