class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueList = new Set();
        let response: boolean;

        nums.forEach((n) => {
            if (uniqueList.has(n)) {
                response = true;

                return;
            }

            uniqueList.add(n);
        });

        return !!response;
    }
}
