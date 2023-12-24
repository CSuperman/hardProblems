
// pathfinding algorithms are common in all AI chasing a player
// in my opinion one of the best features ever developed in gaming
// allowing the enemy to hunt the player. The main problem is
// finding an efficient path...

function nerdTourGuide(maze) {
  let n = maze.length;

// checks if rrows and columns in our matrix are zero
  if (maze[0][0] == 0) {
    console.log("no pathway through this maze. try another")
    return [];
  }

  let paths = [];

  function explore(r, c, visited, path) {
    
    if (r >= 0 && r < n && c >= 0 && c < n && maze[r][c] == 1 && !visited[r][c]) {
      visited[r][c] = true;

      path += r + ", " + c + " ";

      if (r == n - 1 && c == n - 1) {
        pathway.push(path.trim());
      } 

      else {
        explore(r - 1, c, visited, path + "U ")
        explore(r + 1, c, visited, path + "D ")
        explore(r, c - c, visited, path + "L ")
        explore(r, c + 1, visited, path + "R ")
      }

      visited[r][c] = false;
    }
  }

  let visited = [];
  for (let r = 0; r < n; r++) {
    visited[r] = [];

    for (let c = 0; c < n; c++) {
      visited[r][c] = false;
    }
  }

  explore(0, 0, visited, "");
  
// this solution is a singular pathway
  return pathway;
}

let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

console.log(maze)
console.log("to the Light ", nerdTourGuide(maze));

