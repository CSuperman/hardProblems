const canConstruct = (ransomNote, magazine) => {
  const chars = {};

  for (let letter of magazine) {
      chars[letter] = ++chars[letter] || 1;
  }

  for (let letter of ransomNote) {
      if (chars[letter] === 0 || !chars[letter]) {
          return false;
      }
      chars[letter]--;
  }

  return true;
};

const ransomeNote = "a"; const message = "b";
const ransomeNotes = "aa"; const messages = "aab"

console.log(canConstruct(ransomNote, message)) // false
console.log(canConstruct(ransomNotes, messages) // true
