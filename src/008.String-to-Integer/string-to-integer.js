/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
    let target = str.trim()
    if (isNaN(target[0]) && isNaN(target[1])) return 0
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = Math.pow(-2, 31)
    const isMinus = target[0] === '-'
    if (isMinus || target[0] === '+') {
        target = target.slice(1)
    }
    let result = 0
    let index = 0
    for (let i = target.length; i >= 0; i--) {
        const digits = Math.pow(10, index)
        const currentNumber = target[i] * digits
        if (isNaN(currentNumber) || target[i] === ' ') {
            result = 0
            index = 0
        } else {
            result += currentNumber
            index++
        }
    }
    return isMinus ? Math.max(INT_MIN, result * -1) : Math.min(INT_MAX, result)
}
export default myAtoi
