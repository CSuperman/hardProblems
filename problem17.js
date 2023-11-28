// JavaScript source code

const makeChange = (coins, amount) => {
    coins.sort((a, b) => a - b);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            //console.log(amount);
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
}

console.log(makeChange([5, 10, 25], 50));
