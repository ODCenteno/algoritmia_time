// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

  // function getMaxSubSum(arr) {
  //   let maxSum = 0; // if we take no elements, zero will be returned
  
  //   for (let i = 0; i < arr.length; i++) {
  //     let sumFixedStart = 0;
  //     for (let j = i; j < arr.length; j++) {
  //       sumFixedStart += arr[j];
  //       maxSum = Math.max(maxSum, sumFixedStart);
  //     }
  //   }
  
  //   return maxSum;
  // }
  // The solution has a time complexity of O(n2). In other words, if we increase the array size 2 times, the algorithm will work 4 times longer.
  
  // For big arrays (1000, 10000 or more items) such algorithms can lead to serious sluggishness.
  
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }


let result =  getMaxSubSum([-1, 2, 3, -9]) // == 5 (the sum of highlighted items)
// let result = getMaxSubSum([2, -1, 2, 3, -9]) == 6
// let result = getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// let result = getMaxSubSum([-2, -1, 1, 2]) == 3
// let result = getMaxSubSum([100, -9, 2, -3, 5]) == 100
// let result = getMaxSubSum([1, 2, 3]) == 6 (take all)

console.log(`the returned number for ([-1, 2, 3, -9]) is: ${result}`)
