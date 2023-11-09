function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildaTree = (preorder, inorder) => {
    let mapper = new Map()
    for ( let i=0; i < inorder.length; i++ ) {
        mapper.set(inorder[i], i)
    }
    return helper(0, 0, inorder.length - 1)

    function helper(preStart, inStart, inEnd) {
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null
        }
        let rootVal = preorder[preStart]
        let root = new TreeNode (rootVal)
        let inIndex = mapper.get (rootVal)
       
        root.left = helper (preStart + 1, inStart, inIndex - 1)
        root.right = helper (preStart + inIndex - inStart + 1, inIndex + 1, inEnd)
        
        return root
    }
}
