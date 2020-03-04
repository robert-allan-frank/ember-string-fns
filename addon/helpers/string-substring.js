import { helper } from '@ember/component/helper';

/**
 * Substring a string and return the new string.
 *
 * @public
 * @function stringSubstring
 * @param {string} value The string to substring.
 * @param {number} beginIndex The beginning index to substring.
 * @param {number} endIndex The optional end index to substring.
 * @returns {string} The substring string.
 */
export function stringSubstring([value = '', beginIndex = 0, endIndex]) {
  let result;

  if (endIndex === undefined) {
    result = value.substring(beginIndex);
  } else {
    result = value.substring(beginIndex, endIndex);
  }

  return result;
}

export default helper(stringSubstring);
