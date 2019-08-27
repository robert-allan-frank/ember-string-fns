import { helper } from '@ember/component/helper';

/**
 * Determine the first index of a string within a string.
 *
 * @public
 * @function stringIndexOf
 * @param {string} haystack The string to search.
 * @param {string} needle The string to search for.
 * @param {boolean} ignoreCase Whether a case sensitive search should be performed.
 * @returns {number} Zero based index of first character in match from the start of the string else -1.
 */
export function stringIndexOf([haystack, needle, ignoreCase = false]) {
  let result = -1;

  // haystack and needle are required
  if (haystack && needle) {
    if (ignoreCase) {
      result = haystack.toLowerCase().indexOf(needle.toLowerCase());
    } else {
      result = haystack.indexOf(needle);
    }
  }

  return result;
}

export default helper(stringIndexOf);
