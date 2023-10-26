
function longestPattern(string) {
  if (string.length === 0) return 0

  let max = 0
  let stack = [-1]

  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      stack.push(index)
      // for fun: console.log(stack)
    } else {
      stack.pop()

        if (stack.length === 0) {
        stack.push(index)
        } else {
          max = Math.max(max i - stack[stack.length -1])
        }
      
      }
  }
  console.log('there are' max.length 'half-patterns and' max.length / 2 'patterns')
  return max
}
