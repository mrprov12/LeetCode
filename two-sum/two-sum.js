/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for (var i = 0; i < nums.length; i++) {
       var pairIndex = nums.indexOf(target-nums[i]);
       if (pairIndex !== -1 && pairIndex !== i) {
           return [i, pairIndex];
       }
   }
       

};


//because there is only one solution, once found no worries about continuing to search
//double for loop?
//how can we do this without double for loop?

//----------
//could order array, remove nums above target (or just not continue?)
//could start at index 0, remove from target and see if array includes with index of? not faster though

//if sorted, and took min minus target would get max
// ----> these didnt account for getting the index from the original order