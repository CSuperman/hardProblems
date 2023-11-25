class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        return all(ransomNote.count(item) <= magazine.count(item) for item in set(ransomNote))
