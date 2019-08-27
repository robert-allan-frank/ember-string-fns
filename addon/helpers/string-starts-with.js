import { helper } from '@ember/component/helper';

/**
 * Determine if string starts with another string.
 *
 * @public
 * @function stringStartsWith
 * @param {string} haystack The string to search.
 * @param {string} needle The string to look for.
 * @param {boolean} ignoreCase Whether a case insensitive search should be performed.
 * @returns {boolean} True if match is found.
 */
export function stringStartsWith([haystack, needle, ignoreCase = false]) {
  let result = false;

  // haystack and needle are required
  if (haystack && needle) {
    // simple indexof check
    if (ignoreCase) {
      result = haystack.toLowerCase().indexOf(needle.toLowerCase(), 0) === 0;
    } else {
      result = haystack.indexOf(needle, 0) === 0;
    }
  }

  return result;
}

export default helper(stringStartsWith);
