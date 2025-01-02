//Q1: Find the maximum subarray sum (Kadane’s Algorithm)
// function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
// }

//Q2:  Q4: Find the square root of a number
 
function sqrt(x) {
    let low = 0, high = x;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}
