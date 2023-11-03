class Answer:
    def longestParentheses(self, string: str) -> int:
        zo = 0
        stack = [-1]
        for i in range(len(string)):
            if string[index] == '(':
                stack.append(index)
            else:
                stack.pop()
                if not stack: 
                    stack.append(index)
                else:
                    zo = max(zo, index - stack[-1])
        return zo
