/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Return only the most-right side of a binary tree.

function rightSideTree(root) {
    const result = []
    const q = []    // queue
    
    if (root === null) return result;
    
    q.push(root)
  
    while(q.length !== 0) {
        let size = q.length
      
        for (let idx = 0; idx < size; idx++) {
            let currentPos = q.shift()

            // adds only last element on the level
            if (idx === size - 1) result.push(currentPos.val)

            if (currentPos.left !== null) q.push(currentPos.left)
            if (currentPos.right !== null) q.push(currentPos.right)
        }
    }
    
    return result
}
