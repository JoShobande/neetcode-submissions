class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pairs = {
            ')':'(',
            ']':'[',
            '}':'{'   
        }

        for(let char of s){
            if (char === "(" || char === "{" || char === "["){
                stack.push(char)
            }
             if (char === ")" || char === "}" || char === "]"){ 
                const top = stack[stack.length - 1];
                if(top === pairs[char]){
                    stack.pop()
                }else{
                    return false
                }
                  
            }
            
        }
        return stack.length === 0;
    }
}
