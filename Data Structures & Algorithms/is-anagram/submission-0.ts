class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        const charCounter = new Map<string, number>();
        let p = 0;

        while (p !== s.length) {
            charCounter.set(s[p], (charCounter.get(s[p]) || 0) + 1);

            charCounter.set(t[p], (charCounter.get(t[p]) || 0) - 1);

            p++;
        }

        for (const value of charCounter.values()) {
            if (value !== 0) return false;
        }

        return true;
    }
}
