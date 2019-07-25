/* 

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

*/

/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLastWord = function(s) {
//     let sTrim = s.trim()
//     let sArray = sTrim.split(" ")
//     let sLastArray = sArray[sArray.length - 1]
//     return sLastArray.length;
// };
const lengthOfLastWord = function(s) {
    let sLength = 0
    for(let i = s.length; i > 0; i--) {
        if (s[i-1] == " " && sLength > 0) {
            break;
        } else if (s[i-1] !== " ") {
            sLength++;
        }
    }
    return sLength
};
export default lengthOfLastWord;
