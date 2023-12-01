/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKfrequent = function(nums, k) {
    
    let inputLength = nums.length;
    let hashMap = {};
    let frequentKelements = [];
    
    for (var i = 0; i < inputLength; i++){
        let currentChar = parseInt(nums[i]);
        
	if(hashMap[currentChar]){
            hashMap[currentChar] = (parseInt(hashMap[currentChar]) || 0) + 1;
        }
        hashMap[currentChar] = parseInt(1);      
    }
    let topKelement = Object.values(hashMap).sort(function(a, b){return b - a}).slice(0,k);
        for (var j = 0; j < topKelement.length; j++) {
            
	    let a =parseInt(Object.keys(hashMap).find(key => hashMap[key] == topKelement[j]));
            frequentKelements.push(a);
            hashMap[a] = null;
        }
        return frequentKelements;
};



console.log(topKfrequent([1,1,1,2,2,3], 2)) // output: [1, 2]
console.log(topKfrequent([1], 1)) // output: [1, 2]
