function palindrome_doubles(words) {
  var result = []

  for(let i1 = 0; i1 < words.length; i1++) {
    for(let i2 = 0; i2 < words.length; i2++) {
      if(i1 != i2) {
        var x = words[i1] + words[i2]
        var y = x.split().reverse().join()

        if(x === y)
          result.push([i1, i2])
      }
    }

  return result
}
