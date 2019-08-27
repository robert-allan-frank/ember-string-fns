import { helper } from '@ember/component/helper';

/**
 * Determine the last index of a string within a string.
 *
 * @public
 * @function stringLastIndexOf
 * @param {string} haystack The string to search.
 * @param {string} needle The string to search for.
 * @param {boolean} ignoreCase Whether a case sensitive search should be performed.
 * @returns {number} Zero based index of first character in match from the end of the string else -1.
 */
export function stringLastIndexOf([haystack, needle, ignoreCase = false]) {
  let result = -1;

  // haystack and needle are required
  if (haystack && needle) {
    if (ignoreCase) {
      result = haystack.toLowerCase().lastIndexOf(needle.toLowerCase());
    } else {
      result = haystack.lastIndexOf(needle);
    }
  }

  return result;
}

export default helper(stringLastIndexOf);
