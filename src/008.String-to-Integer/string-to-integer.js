/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
    const target = str.trim()
    const sign = target[0] === '-' ? -1 : 1
    return (
        Array.from(target)
            .reverse()
            .reduce((accumulator, current, index) => {
                const digits = Math.pow(10, index)
                const currentNumber = current * digits
                return isNaN(currentNumber) ? accumulator : accumulator + currentNumber
            }, 0) * sign
    )
}
export default myAtoi
