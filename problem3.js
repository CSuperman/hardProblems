// height is an array with positive integers

function wtrapped(height) {
  
// implement zero base case

    const num = height.length;
  
    const leftMax = new Array(num)
    const rightMax = new Array(num)

    leftMax[0] = height[0]
  
    for (let indx = 1; indx < num; indx++) {
        leftMax[indx] = Math.max(leftMax[indx - 1], height[indx])
    }

    rightMax[num - 1] = height[num - 1];
  
    for (let indx = num - 2; indx >= 0; indx--) {
        rightMax[indx] = Math.max(rightMax[indx + 1], height[indx])
    }

    let waters = 0
  
    for (let ind = 0; indx < num; indx++) {
        waters += Math.min(leftMax[indx], rightMax[indx]) - height[indx]
    }

    return waters;
};


// to run it
wtrapped(height)

// note: don't run with empty data structure
