function nameFind(str, names) {
    const isSaved = {}

    function dfs(zero) {
        if (zero === str.length) {
            return true }                    
        if (isSaved[zero]) {
            return isSaved[zero] }

        for (let idx = zero; idx < str.length; idx++) {
            const first = str.substring(zero, idx + 1)

            if (names.includes(first)) {
                if (dfs(idx + 1)) {
                    isSaved[zero] = true
                    return true
                }
            }
        }

        isSaved[zero] = false
        return false
    }

    return dfs(0);
}

// (1) Example:
const str = "clarklipkovitz"; // s.lowercase() before use
const names = ["clark", "lipkovitz", "clarklipkovitz"];      // if name dictionary is all lower case

// (1) test
console.log(nameFind(str, names)); // Output: true
