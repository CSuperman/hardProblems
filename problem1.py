# compared to the javascript solution(s)

class Solution:
def __init__(self):
    self.dict_s = defaultdict(lambda: 0)
    self.dict_t = defaultdict(lambda: 0)

def is_in(self):
    count, total = 0, 0
    for key, val in self.dict_t.items():
        dict1_val = self.dict_s.get(key)
        if dict1_val and dict1_val >= val:
            count += 1
        total += 1
    return count == total

def minWindow(self, s: str, t: str) -> str:
    length_s = len(s)
    i, j = 0, 0
    for k in t:
        self.dict_t[k] += 1

    solution = [0, float('inf')]
    while j < lnth_s:
        self.dict_s[s[j]] += 1
        if self.is_in():
            if j - i <= ans[1] - ans[0]:
                solution = [i, j]

            self.dict_s[s[i]] -= 1
            i += 1
            while self.is_in():
                if j - i < ans[1] - ans[0]:
                    solution = [i, j]
                self.dict_s[s[i]] -= 1
                i += 1
            i -= 1
            self.dict_s[s[i]] += 1
        j += 1

    return s[ans[0]: solution[1] + 1] if solution[1] != float('inf') else ""
