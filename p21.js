function AC(asteroids) {
  var stack = []
  
  for (var idx = 0; idx < asteroids.length; idx++) {
    let curr = asteroids[idx]
    
    while (stack.length && stack[stack.length - 1] > 0 && curr < 0) {
      if (stack[stack.length - 1] + curr === 0) {
        stack.pop()
        curr = 0
        break

      } else if (stack[stack.length - 1] + curr < 0) {
        stack.pop()

      } else {
        curr = null
        break
      }
    }
    if (curr !== null) {
      stack.push(curr)
    }
  }
  return stack
}





console.log(AC([5,10,-5])) // output [5, 10]
console.log(AC([8,-8]))    // output []
console.log(AC([10,2,-5])) // output [10]
