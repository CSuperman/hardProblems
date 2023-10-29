function palindrome_doubles(chars) {
  var results = []

  for (let i1 = 0; i1 < chars.length; i1++) {
    for (let i2 = 0; i2 < chars.length; i2++) {
      if (i1 != i2) {
        var x = chars[i1] + chars[i2]            // pairing the strings
        var y = x.split("").reverse().join("")   // setup for equality check

        if (x === y) {                           // comparing palindrome(s) condition
          result.push([i1, i2])
        }
      }
    }
  }
  
  return results
}


// tests
