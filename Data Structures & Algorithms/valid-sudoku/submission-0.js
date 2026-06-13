class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = {}
        let columns = {}
        let box = {}

        for(let r=0; r<9; r++){
            for(let c=0; c<9; c++){
                const value = board[r][c]
                if(value === '.') continue
                let boxNumber = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if(!rows[r]) rows[r] = new Set()
                if(!columns[c]) columns[c] = new Set()
                if(!box[boxNumber]) box[boxNumber] = new Set()
                if(rows[r].has(value) || columns[c].has(value) || box[boxNumber].has(value)){
                    return false
                }else{
                    rows[r].add(value)
                    columns[c].add(value)
                    box[boxNumber].add(value)
                }
            }
            
        }
        return true
    }
}
