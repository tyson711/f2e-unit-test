/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
    const target = str.trim()
    const sign = target[0] === '-' ? -1 : 1
    let result = 0
    let index = 0
    for (let i = target.length; i >= 0; i--) {
        const digits = Math.pow(10, index)
        const currentNumber = target[i] * digits
        if (currentNumber) {
            result += currentNumber
            index++
        }
    }
    return result * sign
}
export default myAtoi
