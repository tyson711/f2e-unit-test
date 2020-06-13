/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
    return Array.from(str)
        .reverse()
        .reduce((accumulator, current, index) => {
            const digits = Math.pow(10, index)
            return accumulator + current * digits
        }, 0)
}
export default myAtoi
