/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the product of `num1` and `num2`
 * @returns `NaN` if either argument is not a number
 */
export function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 * num2;
}

/**
 * @param {number} age
 * @returns {string} "Age not valid." if `age` is not a number
 * @returns {string} "You must be 18 or older to vote." if `age` is less than 18
 * @returns {string} "Who would you like to vote for?" if `age` is 18 or older
 */
export function vote(age) {
  if (!(typeof age === "number")) {
    return "Age not valid.";
  } else if (age < 18) {
    return "You must be 18 or older to vote.";
  } else {
    return "Who would you like to vote for?";
  }
}

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string} the concatenation of `str1` and `str2`
 * @returns `undefined` if either argument is not a string
 */
export function concatenateStrings(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return "";
  } else if (str1.length === 0) {
    return str2;
  } else if (str2.length === 0) {
    return str1;
  } else if (isNaN(str1) && isNaN(str2)) {
    return str1 + str2;
  }
}
