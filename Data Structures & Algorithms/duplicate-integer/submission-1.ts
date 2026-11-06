class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueList = new Set();

        for (const n of nums) {
            if (uniqueList.has(n)) {

                return true;
            }

            uniqueList.add(n);
        };

        return false;
    }
}
