class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let count = {}
        for(let letter of s ){
            if(count[letter] !== undefined){
                count[letter]++
            }else{
                count[letter] = 1
            }
        }
        for (let letter of t){
            if(count[letter] !== undefined){
                count[letter]--
            }else{
                return false
            }
        }
        for (let value of Object.values(count)) {
            if (value !== 0) {
                return false;
            }
        }
        return true
      

    }

}
