class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    // Map(numero iterado: index)
    const hashMap = new Map<number, number>();

    for (const [index, n] of nums.entries()) {
      const complement = target - n;
      const complementIndex = hashMap.get(complement);

      if (hashMap.has(complement)) {
        return [complementIndex, index];
      }

      hashMap.set(n, index);
    }
  }
}
