/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {

  arr.sort((a, b) => a - b);

  let count = 1;
  let flag = false;
  let lcm = 0;

  while(count >= 1) {

    lcm = count * arr[1];
  
    for (let i = arr[0]; i <= arr[1]; i++) {
      if (lcm % i !== 0) {
        flag = false;
        break;
      } else {
        flag = true;  
      }
  }

  count++;

   if (flag) {
     return lcm;
   }
  }
}

console.log(smallestCommons([1, 13])); // 360360
