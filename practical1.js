// This problem is just breaking alphabetic characters to see if it forms 2 different substrings in a dictionary.
// Basically it is name lookup as an ID and touches on some of the complexities of practical application worldwide.

// There's few ways to predict if a name will be already saved / known,
// one that i can think of is looking up data science research for unique
// first, middle, last names. Essentially if you have perhaps ~100 common last names,
// in many countries you would have 90+% of them for a given background.

// Efficiency: people spell names however they want these days and that effects algo & ds efficiency
// "clark", as a first will validate in names for the first 5 characters of "clarke".

// Fix: It's possible to use different data structures for first, middle, last names for formatted inputs.

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



// Further "practical" test cases
//const mid = "clarkrichardlipkovitz"
//console.log(nameFind(mid, names))

// If it were to be expanded for middle names, dfs would be called again with dynamic variables for mid,
// replacing "first", and saved as mid instead of "first". Mostly the rest would be the same.
