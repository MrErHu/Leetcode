/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return Array.prototype.reverse.apply(s.split('')).join('');
};