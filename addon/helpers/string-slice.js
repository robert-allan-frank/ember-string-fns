import { helper } from '@ember/component/helper';

/**
 * Slice a string and return the new string.
 *
 * @public
 * @function stringSlice
 * @param {string} value The string to slice.
 * @param {number} beginIndex The beginning index to slice.
 * @param {number} endIndex The optional end index to slice.
 * @returns {string} The sliced string.
 */
export function stringSlice([value = '', beginIndex = 0, endIndex]) {
  let result;

  if (endIndex === undefined) {
    result = value.slice(beginIndex);
  } else {
    result = value.slice(beginIndex, endIndex);
  }

  return result;
}

export default helper(stringSlice);
