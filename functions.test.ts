const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('should return an array', () => {
        let returnArr = shuffleArray([1,2,3,4])
        expect(typeof returnArr).toBe('array')

    })
    it('should return an array of the same length as is sent in', () =>{
        expect(shuffleArray([1,2,3,4]).length).toBe(4)
    })
    it('should return all the same items as sent in', ()=>{
        let returnArr = shuffleArray([1,2,3,4])
        expect(returnArr).toContain(1)
        expect(returnArr).toContain(2)
        expect(returnArr).toContain(3)
        expect(returnArr).toContain(4)
    })
})

