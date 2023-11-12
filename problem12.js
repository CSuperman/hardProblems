var nums = [1, 2, 3, 100, 4, 20];


var largestN = (nums) => {
    var arr = []

    nums.forEach((integer) => {
        arr.push(integer.toString())
    })

    arr.sort((a, b) => (b + a).localeCompare(a + b))
    
    if (arr[0] == "0") return "0";

    var s = ""
    arr.forEach((integer) => {
        s += integer
    })
    console.log(s)
}



module.exports = largestN