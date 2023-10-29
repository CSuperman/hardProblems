function palindrome_doubles(chars) {
  var results = []

  for (let i1 = 0; i1 < chars.length; i1++) {
    for (let i2 = 0; i2 < chars.length; i2++) {
      if (i1 != i2) {
        var x = chars[i1] + chars[i2]
        var y = x.split("").reverse().join("")

        if (x === y)
          result.push([i1, i2])
      }
    }
  }
  
  return results
}


// tests
