/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
    if (isNaN(str[0]) && isNaN(str[1])) return 0
    const INT_MAX = Math.pow(2, 31)
    const INT_MIN = Math.pow(-2, 31)
    const target = str.trim()
    const isMinus = target[0] === '-'
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
    return isMinus ? Math.max(INT_MIN, result * -1) : Math.min(INT_MAX, result)
}
export default myAtoi
