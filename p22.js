// optimizing problem survival for dungeon game

function calculateMinimumHPRecursive(dungeon, row, col) {

    if (row === dungeon.length - 1 && col === dungeon[0].length - 1) {
        // The minimum health required to survive in the princess room
        return Math.max(1, 1 - dungeon[row][col]);
    }


    const rightHealth = (col < dungeon[0].length - 1)
        ? calculateMinimumHPRecursive(dungeon, row, col + 1)
        : Infinity;


    const downHealth = (row < dungeon.length - 1)
        ? calculateMinimumHPRecursive(dungeon, row + 1, col)
        : Infinity;


    const minHealth = Math.min(rightHealth, downHealth);


    const currentHealth = Math.max(1, minHealth - dungeon[row][col]);

    return currentHealth;
}

// test

const dungeon = [
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
];

console.log(calculateMinimumHPRecursive(dungeon, 0, 0)); // Output: 7
