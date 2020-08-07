const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5){
    break;
  }
  console.log(nums[i]);
}

console.log("-------------")

const nums2 = [1, 2, -3, 4, -5, 6, -7, 8, 9];
for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] < 0){
    continue;
  }
  console.log(nums2[i]);
}