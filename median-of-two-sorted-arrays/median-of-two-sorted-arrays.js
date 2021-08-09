/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var array = nums1.concat(nums2);
    
    if (array.length === 1) {
        return array[0]/1.00000;
    } else if (array.length === 0) {
        return null
    } else {
        array.sort((a, b) => a-b);
        if (array.length % 2 !== 0) { //if its odd
            return array[(array.length -1)/2]
        } else { // if its even
            return (array[Math.floor((array.length-1)/2)] + array[Math.ceil((array.length-1)/2)])/2;
        }
    }

};

