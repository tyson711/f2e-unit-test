import addBinary from './add-binary.js'

/* 

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"


Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

describe('add binary', () => {
    test('a is [11] and b is [1] should return "100"', () => {
        const a = [11]
        const b = [1]
        expect(addBinary(a,b)).toEqual("100")
    })
})
