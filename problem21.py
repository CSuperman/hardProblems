def AC(asteroids):
    stack = []
    for asteroid in asteroids:
        if asteroid > 0:
            stack.append(asteroid)
        else:
            while stack and stack[-1] > 0 and stack[-1] < abs(asteroid):
                stack.pop()
            if not stack or stack[-1] < 0:
                stack.append(asteroid)
            elif stack[-1] == abs(asteroid):
                stack.pop()
    return stack


print(AC([5,10,-5]))
print(AC([8,-8]))
print(AC([10,2,-5]))
