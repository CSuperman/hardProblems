// todo: write out test cases

// meditation: where can we apply like solutions in our daily work?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

  const save = tString.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1
    return acc
  }, {})

  let minLength = sString.length + 1
  let counter = tString.length
  let minString = ''
  let end = 0
  let start = 0

//
  while (s[end]) {
    const endChar = s[end]
    if (save.hasOwnProperty(endChar)) {
      save[endChar]--
      if (save[endChar] >= 0) counter--
    }

    // 
    while(counter === 0) {

      const currentLength = end - start + 1
      if (currentLength < minLength) {
        minString = sString.substring(start, end + 1)
        minLength = currentLength
      }

      const startChar = sString[start]
      if (save.hasOwnProperty(startChar)) {
        save[startChar]++
        if (save[startChar] >= 1) counter++
      }
      start++
    }
    end++
  }

  console.log(minString)
  return minString
}
