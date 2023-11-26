function initializeArray(m, n) {
    return Array(m).fill().map(() => Array(n).fill());
}

function isValidAndUndefined(x, y, m, n, result) {
    return x >= 0 && y >= 0 && x < m && y < n && result[x][y] === undefined;
}

var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const result = initializeArray(m, n);
    const queue = [];
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // up, left, down, right

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    while (queue.length) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (isValidAndUndefined(newX, newY, m, n, result)) {
                queue.push([newX, newY]);
                result[newX][newY] = result[x][y] + 1;
            }
        }
    }
    return result;
};

// I hope you like tests
const mat1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
const mat2 = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]

console.log(updateMatrix(mat1))     //Output: [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
console.log(updateMatrix(mat2))     // Output: [[0, 0, 0], [0, 1, 0], [1, 2, 1]]
