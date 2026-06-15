class MinStack {
    constructor() {
        this.stack = []
        this.minStack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minStack.length === 0){
            this.minStack.push(val)
        }else{
            let existingMin = this.minStack[this.minStack.length-1]
            if(existingMin < val){
                this.minStack.push(existingMin)
            }else{
                this.minStack.push(val)
            }
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        let top = this.stack[this.stack.length-1]
        return top
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = this.minStack[this.minStack.length-1]
        return min
    }
}
