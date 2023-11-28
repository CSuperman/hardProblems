# python version of the problem 17 solution

def makeChange(coins, amount):
    coins.sort(reverse=True)
    coinTotal = 0
    i = 0
    while amount > 0:
        if coins[i] <= amount:
            amount -= coins[i]
            coinTotal += 1
        else:
            i += 1
    return coinTotal

print(makeChange([5, 10, 25], 50))  # output: 2
