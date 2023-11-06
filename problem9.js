function rightSideTree(root) {
    const result = []
    const q = []
    
    if (root === null) return result;
    
    q.push(root)
  
    while(q.length !== 0) {
        let size = q.length
      
        for (let idx = 0; idx < size; idx++) {
            let currentPos = q.shift()

            if (idx === size - 1) result.push(currentPos.val)

            if (currentPos.left !== null) q.push(currentPos.left)
            if (currentPos.right !== null) q.push(currentPos.right)
        }
    }
    
    return result
}
