class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;

    /*
[1,2,3,4]; target = 3

step1 -> 1 + 4 = 5; 5 é maior q target; r--
step1 -> 1 + 3 = 4; 4 é maior q target; r--
step1 -> 1 + 2 = 3; 3 é igual q target; [1,2]

            */
    let sum: number;
    while (sum !== target) {
      sum = numbers[l] + numbers[r];
      
      if (sum < target) {
        l++;
        continue;
      }

      if (sum > target) {
        r--;
        continue;
      }
    }

    return [l + 1, r + 1];
  }
}
