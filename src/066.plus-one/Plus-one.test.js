import plusOne from './Plus-one.js'

/* 

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/

describe('Plus One', () => {
    test('digits is [0] should return [1]', () => {
        const digits = [0]
        expect(plusOne(digits)).toEqual([1])
    })
    test('digits is [1,2,3] should return [1,2,4]', () => {
        const digits = [1, 2, 3]
        expect(plusOne(digits)).toEqual([1, 2, 4])
    })
    test('digits is [1,9,9] should return 2,0,0]', () => {
        const digits = [1,9,9]
        expect(plusOne(digits)).toEqual([2,0,0])
    })
    test('digits is [9] should return [1,0]', () => {
        const digits = [9]
        expect(plusOne(digits)).toEqual([1,0])
    })
    test('digits is [9,9,9,9] should return [1,0,0,0,0]', () => {
        const digits = [9,9,9,9]
        expect(plusOne(digits)).toEqual([1,0,0,0,0])
    })
})
