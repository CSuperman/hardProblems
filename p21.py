def AC(asteroids):
    if len(asteroids) <= 1:
        return asteroids
    if asteroids[0] > 0 and asteroids[1] < 0:
        if abs(asteroids[0]) > abs(asteroids[1]):
            return AC([asteroids[0]] + asteroids[2:])
        elif abs(asteroids[0]) == abs(asteroids[1]):
            return AC(asteroids[2:])
        else:
            return AC(asteroids[1:])
    else:
        return [asteroids[0]] + AC(asteroids[1:])



print(AC([5,10,-5]))
print(AC([8,-8]))
print(AC([10,2,-5])) // supposed be just 10
